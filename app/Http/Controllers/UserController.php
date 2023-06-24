<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        dd($request->query('users'));
        $users = User::with('roles')->get();
        $usersWithNoGuest = array_filter($users->toArray(), function ($user) {
            foreach($user['roles'] as $role) {
                if (in_array('super-admin', $role) || in_array('admin', $role)) {
                    return $user;
                }
            }
        });
        return Inertia::render('Dashboard/Admin/User/Index', [
            'users' => array_values($usersWithNoGuest)
        ]);
    }

    public function indexGuest()
    {
        $users = User::with('roles')->get();
        $guests = array_filter($users->toArray(), function ($user) {
            foreach($user['roles'] as $role) {
                if (in_array('guest', $role)) {
                    return $user;
                }
            }
        });

        return Inertia::render('Dashboard/Admin/User/IndexGuest', [
            'users' => array_values($guests)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
