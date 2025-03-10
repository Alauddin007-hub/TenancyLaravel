<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TenancyRegisterController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// routes/web.php, api.php or any other central route files you have

// foreach (config('tenancy.central_domains') as $domain) {
//     Route::domain($domain)->group(function () {
//         Route::get('/', function () {
//             return Inertia::render('Welcome', [
//                 'canLogin' => Route::has('login'),
//                 'canRegister' => Route::has('register'),
//                 'laravelVersion' => Application::VERSION,
//                 'phpVersion' => PHP_VERSION,
//             ]);
//         });

//         Route::get('/dashboard', function () {
//             return Inertia::render('Dashboard');
//         })->middleware(['auth', 'verified'])->name('dashboard');

//         Route::middleware('auth')->group(function () {
//             Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//             Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//             Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//         });
//         Route::resource('tenancy', TenancyRegisterController::class);
//     });
// }
// require __DIR__ . '/auth.php';

Route::group(['domain'=>config('tenancy.central_domains.0')],function(){


    Route::get('/', function () {
        return Inertia::render('Welcome', [
                            'canLogin' => Route::has('login'),
                            'canRegister' => Route::has('register'),
                            'laravelVersion' => Application::VERSION,
                            'phpVersion' => PHP_VERSION,
                        ]);
    });
    
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');
    
    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        Route::resource('tenancy', TenancyRegisterController::class);
    });
    
    require __DIR__.'/auth.php';


});
