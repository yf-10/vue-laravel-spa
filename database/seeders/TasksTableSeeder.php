<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for ($i=1; $i<=10; $i++) {
            Task::create([
                'title' => 'title' . $i,
                'content' => 'content' . $i,
                'person_in_charge' => 'person_in_charge' . $i,
            ]);
        }
    }
}
