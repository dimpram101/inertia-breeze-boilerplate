<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate([
            'name' => 'Super Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin2023'),
            'phone_number' => '081234567890',
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('super-admin');

        User::updateOrCreate([
            'name' => 'Admin',
            'email' => 'admin1@gmail.com',
            'password' => bcrypt('admin2023'),
            'phone_number' => '081234567890',
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('admin');

        User::updateOrCreate([
            'name' => 'Guest',
            'email' => 'guest@gmail.com',
            'password' => bcrypt('guest2023'),
            'phone_number' => '081234567890',
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('guest');

        User::updateOrCreate([
            'name' => 'Guest 2',
            'email' => 'guest2@gmail.com',
            'password' => bcrypt('guest2023'),
            'phone_number' => '081234567890',
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('guest');
    }
}
