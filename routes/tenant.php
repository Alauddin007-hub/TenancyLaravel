<?php

declare(strict_types=1);

use App\Http\Controllers\TenantApp\ProfileController;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;
use App\Http\Controllers\TenantApp\ProfileController as TenantAppProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Stancl\Tenancy\Database\Models\Domain;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'web',
    InitializeTenancyByDomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function () {
    Route::get('/', function () {
        // dd(\App\Models\User::all());
        // return 'This is your multi-tenant application. The id of the current tenant is ' . tenant('id');
        $domain = Domain::where('tenant_id', tenant('id'))->first();
        $name = $domain->domain;
        return Inertia::render('TenantDashboard', [
            'auth' => Auth::user(),
            'tenantName' => tenant('id'),
            'tenantDomain' => $name,
        ]);
    });

    Route::get('/dashboard', function () {
        return Inertia::render('TenantApp/Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    require __DIR__ . '/tenantApp_auth.php';
});
