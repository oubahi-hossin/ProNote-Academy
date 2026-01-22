import { useState } from 'react';
import { Card, Badge, Button, Modal, Input, PageHeader } from '../../components/common';
import { Breadcrumbs } from '../../components/layout';
import { Filter, Shield, User, Pencil, Trash2, ChevronLeft, ChevronRight, UserPlus } from 'lucide-react';

const UserManagement = () => {
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState({ role: 'all', status: 'all' });

    const users = [
        { id: 1, name: 'Jean Dupont', email: 'jean.dupont@protonate.com', role: 'Formateur', department: 'Web Dev 101', status: 'Active' },
        { id: 2, name: 'Alice Martin', email: 'alice.m@protonate.com', role: 'Stagiaire', department: 'UX/UI Design', status: 'Active' },
        { id: 3, name: 'Marc Bernard', email: 'marc.b@protonate.com', role: 'Admin', department: 'Administration', status: 'Inactive' },
        { id: 4, name: 'Sophie Leroy', email: 'sophie.l@protonate.com', role: 'Formateur', department: 'Data Science', status: 'Active' },
        { id: 5, name: 'Pierre Moreau', email: 'pierre.m@protonate.com', role: 'Stagiaire', department: 'Web Dev 101', status: 'Active' },
    ];

    const roleColors = {
        Admin: 'warning',
        Formateur: 'primary',
        Stagiaire: 'purple',
    };

    return (
        <div className="space-y-6">
            <Breadcrumbs items={[{ label: 'User Management' }]} />

            {/* Page Header */}
            <PageHeader
                title="User Management"
                subtitle="Manage and organize trainers, students, and administrative staff."
            >
                <Button icon={UserPlus} onClick={() => setShowModal(true)}>
                    Add New User
                </Button>
            </PageHeader>

            {/* Filters & Table */}
            <Card padding="none">
                <div className="p-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" strokeWidth={2} />
                            <select
                                className="pl-10 pr-8 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary min-w-[140px] outline-none transition-all"
                                value={filter.role}
                                onChange={(e) => setFilter({ ...filter, role: e.target.value })}
                            >
                                <option value="all">All Roles</option>
                                <option value="Admin">Admin</option>
                                <option value="Formateur">Formateur</option>
                                <option value="Stagiaire">Stagiaire</option>
                            </select>
                        </div>
                        <div className="relative">
                            <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" strokeWidth={2} />
                            <select
                                className="pl-10 pr-8 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary min-w-[140px] outline-none transition-all"
                                value={filter.status}
                                onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                            >
                                <option value="all">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-slate-500 text-sm">
                        Showing <span className="font-semibold text-slate-900 dark:text-white">1-{users.length}</span> of <span className="font-semibold text-slate-900 dark:text-white">{users.length}</span> users
                    </div>
                </div>

                {/* Users Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">User Details</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Role</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Class/Department</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                <User className="w-5 h-5" strokeWidth={2} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900 dark:text-white">{user.name}</p>
                                                <p className="text-xs text-slate-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge variant={roleColors[user.role]}>{user.role}</Badge>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{user.department}</td>
                                    <td className="px-6 py-4">
                                        <div className={`flex items-center gap-2 ${user.status === 'Active' ? 'text-emerald-600' : 'text-slate-500'}`}>
                                            <div className={`size-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                            <span className="text-xs font-medium">{user.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1">
                                            <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                                <Pencil className="w-5 h-5" strokeWidth={2} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                                <Trash2 className="w-5 h-5" strokeWidth={2} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                    <button className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-50 transition-colors" disabled>
                        <ChevronLeft className="w-[18px] h-[18px]" strokeWidth={2} />
                        Previous
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="size-9 rounded-lg bg-primary text-white text-sm font-semibold">1</button>
                        <button className="size-9 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">2</button>
                        <button className="size-9 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">3</button>
                    </div>
                    <button className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                        Next
                        <ChevronRight className="w-[18px] h-[18px]" strokeWidth={2} />
                    </button>
                </div>
            </Card>

            {/* Add User Modal */}
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add New User">
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="First Name" placeholder="e.g. Jean" />
                        <Input label="Last Name" placeholder="e.g. Dupont" />
                    </div>
                    <Input label="Email Address" type="email" placeholder="jean.dupont@protonate.com" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">User Role</label>
                            <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                                <option>Select Role</option>
                                <option>Admin</option>
                                <option>Formateur</option>
                                <option>Stagiaire</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Assign Class</label>
                            <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                                <option>Select Class</option>
                                <option>Web Dev 101</option>
                                <option>UX/UI Design</option>
                                <option>Data Science</option>
                            </select>
                        </div>
                    </div>
                    <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800 mt-6">
                        <Button variant="ghost" onClick={() => setShowModal(false)}>Cancel</Button>
                        <Button type="submit">Create User</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default UserManagement;
