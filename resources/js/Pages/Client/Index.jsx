import LinkButton from "@/Components/LinkButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Index() {
    const { tenants } = usePage().props;

    // console.log(tenants);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Tenant
                    </h2>
                    <LinkButton href={route("tenancy.create")} className="ms-4">
                        Add Tenancy
                    </LinkButton>
                </div>
            }
        >
            <Head title="Tenant" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                                                #
                                            </th>
                                            <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                                                Company Name
                                            </th>
                                            <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                                                Name
                                            </th>
                                            <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                                                Email
                                            </th>
                                            <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                                                Domain
                                            </th>
                                            <th className="py-3 px-6 text-center text-gray-700 font-semibold">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* <tbody>
                                        <tr className="border-t border-gray-200 hover:bg-gray-50">
                                            <td className="py-4 px-6">1</td>
                                            <td className="py-4 px-6">
                                                John Doe
                                            </td>
                                            <td className="py-4 px-6">
                                                john@example.com
                                            </td>
                                            <td className="py-4 px-6">Admin</td>
                                            <td className="py-4 px-6 text-center">
                                                <button className="text-blue-500 hover:underline mr-3">
                                                    Edit
                                                </button>
                                                <button className="text-red-500 hover:underline">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody> */}

                                    <tbody>
                                        {tenants.length > 0 ? (
                                            tenants.map((tenant, index) => (
                                                <tr
                                                    key={tenant.id}
                                                    className="border-t border-gray-200 hover:bg-gray-50"
                                                >
                                                    <td className="py-4 px-6">
                                                        {index + 1}
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        {tenant.company_name}
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        {tenant.name}
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        {tenant.email}
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        {tenant.domain}
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <LinkButton
                                                            href={route(
                                                                "tenancy.edit",
                                                                tenant.id
                                                            )}
                                                            className="text-blue-500 hover:underline mr-3"
                                                        >
                                                            Edit
                                                        </LinkButton>
                                                        <button
                                                            onClick={() =>
                                                                deleteTenant(
                                                                    tenant.id
                                                                )
                                                            }
                                                            className="text-red-500 hover:underline"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td className="py-4 px-6">
                                                    {tenants.domains.length > 0
                                                        ? tenants.domains
                                                              .map(
                                                                  (domain) =>
                                                                      domain.domain
                                                              )
                                                              .join(", ")
                                                        : "No domain assigned"}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
