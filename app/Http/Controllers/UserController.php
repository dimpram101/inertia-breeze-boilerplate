<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with('roles')->get();
        return Inertia::render('Dashboard/Admin/User/Index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::all();
        return Inertia::render('Dashboard/Admin/User/Create', [
            "roles" => $roles
        ]);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|min:4|string',
            'email' => 'required|email|string',
            'phone_number' => 'required|string|min:11',
            'roles*.name' => 'required',
            'password' => 'required|string|min:8',
            'confirm_password' => 'required|min:8|same:password'
        ]);

        $users = User::create($validatedData);

        foreach($request->roles as $role) {
            $users->assignRole($role['name']);
        }
        
        return redirect()->route('user.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::with('roles')->find($id);
        return Inertia::render('Dashboard/Admin/User/Show', [
            'user' => $user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::with('roles')->find($id);
        $roles = Role::all();
        return Inertia::render('Dashboard/Admin/User/Edit', [
            'user' => $user,
            'roles' => $roles
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|min:4|string',
            'email' => 'required|email|string',
            'phone_number' => 'required|string|min:11',
            'roles*.name' => 'required',
            'password' => 'nullable|string|min:8',
            'confirm_password' => 'nullable|min:8|same:password'
        ]);

        DB::transaction(function () use ($request, $id) {
            $user = User::with('roles')->find($id);
    
            if (isset($request->password)) {
                $user->password = Hash::make($request->password);
            }

            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'phone_number' => $request->phone_number
            ]);
            $roles = [];
            foreach($request->roles as $role) {
                array_push($roles, $role['name']);
            }

            $user->syncRoles($roles);
            $user->save();
        });
        return redirect()->route('user.index')->with('message', 'User updated!');
    }

    public function guestUpdate(Request $request, string $id) {
        $request->validate([
            'name' => 'required|min:4|string',
            'email' => 'required|email|string',
            'phone_number' => 'required|string|min:11',
            'roles*.name' => 'required',
            'current_password' => 'nullable|string|min:8',
            'password' => 'required|string|min:8',
            'confirm_password' => 'required|min:8|same:password'
        ]);

        $user = User::find($id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);

        $user->delete();

        return redirect()->route('user.index');
    }
}
