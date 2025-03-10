import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function TenancyRegister() {
    const { data, setData, post, processing, errors, reset } = useForm({
        company_name: '',
        domain: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('tenancy.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Add Tenant" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="company_name" value="Company Name" />

                    <TextInput
                        id="company_name"
                        name="company_name"
                        value={data.company_name}
                        className="mt-1 block w-full"
                        autoComplete="company_name"
                        isFocused={true}
                        onChange={(e) => setData('company_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.company_name} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="domain" value="Domain" />

                    <TextInput
                        id="domain"
                        name="domain"
                        value={data.domain}
                        className="mt-1 block w-full"
                        autoComplete="domain"
                        isFocused={true}
                        onChange={(e) => setData('domain', e.target.value)}
                        required
                    />

                    <InputError message={errors.domain} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="name" value="name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                {/* <div className="mt-4 flex items-center justify-end"> */}
                <div className="mt-4 flex justify-center items-center">
                    {/* <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link> */}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register Tenancy
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
