<?php

namespace App\Http\Controllers;

use App\Http\Requests\storeTenancyRegisterRequest;
use App\Models\Tenant;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class TenancyRegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tenants = Tenant::with('domains')->get();
        return Inertia::render('Client/Index', ['tenants' => $tenants]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Client/TenancyRegister');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(storeTenancyRegisterRequest $request)
    {
        // dd($request->validated());

        // $tenant = Tenant::create($request->validated());
        // $tenant->createDomain(['domain' => $request->domain]);
        $validatedData = $request->validated();
        // $validatedData['password'] = bcrypt($validatedData['password']);
        $tenant = Tenant::create($validatedData);

        $tenant->createDomain(['domain' => $validatedData['domain']]);

        return redirect()->route('tenancy.index')->with('success', 'Tenant created successfully.');

        // $data = [
        //     'name' => $request->name,
        //     'company_name' => $request->company_name,
        //     'email' => $request->email,
        //     'domain' => $request->domain,
        //     'password' => $request->password,
        // ];
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
