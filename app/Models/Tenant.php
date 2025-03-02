<?php

namespace App\Models;

use Illuminate\Support\Facades\Hash;
use Stancl\Tenancy\Database\Models\Tenant as BaseTenant;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;
use Stancl\Tenancy\Database\Models\Domain;

class Tenant extends BaseTenant implements TenantWithDatabase
{
    use HasDatabase, HasDomains;

    public static function getCustomColumns(): array
    {
        return [
            'id',
            'name',
            'company_name',
            'email',
            'password'
        ];
    }

    public function domains()
    {
        return $this->hasMany(Domain::class);
    }
    // protected $fillable = ['name', 'company_name', 'email', 'password'];

    // protected $casts = [
    //     'data' => 'array',
    // ];

    public function setPasswordAtteibute($value)
    {
        return $this->attributes['password'] = bcrypt($value);
    }
}
