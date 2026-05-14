import { Link } from 'react-router-dom';
import { Card, Badge, PageHeader } from '../../components/common';
import { Breadcrumbs } from '../../components/layout';
import { User, School, Calendar, TrendingUp, UserPlus, FileText, BookOpen, AlertTriangle, TrendingDown, Filter, Download, MoreVertical } from 'lucide-react';

const AdminDashboard = () => {
    const stats = [
        { icon: User, label: 'Total Students', value: '1,240', change: '+5.2%', positive: true, color: 'blue' },
        { icon: School, label: 'Total Formateurs', value: '86', change: '+2.1%', positive: true, color: 'purple' },
        { icon: Calendar, label: 'Active Classes', value: '42', change: '-1.4%', positive: false, color: 'amber' },
        { icon: TrendingUp, label: 'Avg. Performance', value: '84%', change: '+3.8%', positive: true, color: 'emerald' },
    ];

    const activities = [
        { icon: UserPlus, colorClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400', title: 'New student registered', desc: 'Sarah Jenkins • Level 2 Web Dev', time: '2 mins ago' },
        { icon: FileText, colorClass: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400', title: 'Grade report published', desc: 'Marketing Strategy - Class A', time: '1 hour ago' },
        { icon: BookOpen, colorClass: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400', title: 'New module added', desc: 'UI/UX Design Fundamentals', time: '3 hours ago' },
        { icon: AlertTriangle, colorClass: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400', title: 'System Maintenance', desc: 'Database backup scheduled', time: '5 hours ago' },
    ];

    const classes = [
        { name: 'Web Design & Dev 2024', formateur: 'Marc Dupont', students: 24, completion: 85, status: 'Active' },
        { name: 'Digital Marketing 101', formateur: 'Sophie Martin', students: 18, completion: 42, status: 'In Progress' },
        { name: 'Data Science Pro', formateur: 'Alain Richard', students: 12, completion: 95, status: 'Active' },
    ];

    const iconColorClasses = {
        blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
        purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
        amber: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
        emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
    };

    return (
        <div className="space-y-8">
            <Breadcrumbs items={[{ label: 'Dashboard' }]} />

            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {stats.map((stat, index) => (
                    <Card key={index} hover className="group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2.5 rounded-xl ${iconColorClasses[stat.color]}`}>
                                <stat.icon className="w-6 h-6" strokeWidth={2} />
                            </div>
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${stat.positive
                                ? 'text-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400'
                                : 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400'
                                }`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
                        <h3 className="text-3xl font-bold mt-1 tracking-tight">{stat.value}</h3>
                        <div className="mt-4 h-10 w-full flex items-end gap-1">
                            {[35, 55, 75, 100, 55].map((h, i) => (
                                <div
                                    key={i}
                                    className={`w-full rounded-t transition-all duration-300 ${i === 3 ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                                        }`}
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                    </Card>
                ))}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card padding="md" className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Enrollment Trends</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Monthly student intake for 2024</p>
                        </div>
                        <select className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 px-4 py-2 cursor-pointer">
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>

                    <div className="flex items-baseline gap-3 mb-8">
                        <p className="text-3xl font-bold tracking-tight">15,420</p>
                        <p className="text-emerald-600 text-sm font-semibold flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" strokeWidth={2} /> 12% vs last year
                        </p>
                    </div>

                    <div className="grid grid-cols-7 gap-3 items-end h-[180px] relative">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month, i) => {
                            const heights = [55, 40, 75, 95, 65, 50, 80];
                            return (
                                <div key={month} className="flex flex-col items-center gap-3">
                                    <div
                                        className={`w-full rounded-lg transition-all duration-300 ${i === 3
                                            ? 'bg-primary shadow-lg shadow-primary/20'
                                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-primary/30'
                                            }`}
                                        style={{ height: `${heights[i]}%` }}
                                    />
                                    <span className="text-xs font-semibold text-slate-500">{month}</span>
                                </div>
                            );
                        })}
                    </div>
                </Card>

                <Card padding="none" className="flex flex-col">
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <h2 className="text-lg font-bold">Recent Activities</h2>
                        <Link to="/admin/logs" className="text-primary text-sm font-semibold hover:underline">View All</Link>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3 space-y-2">
                        {activities.map((activity, index) => (
                            <div key={index} className="flex gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${activity.colorClass}`}>
                                    <activity.icon className="w-5 h-5" strokeWidth={2} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold truncate">{activity.title}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{activity.desc}</p>
                                    <p className="text-[10px] text-slate-400 mt-1.5 uppercase tracking-wider font-bold">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>

            <Card padding="none" className="overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap justify-between items-center bg-slate-50/80 dark:bg-slate-800/30 gap-4">
                    <h2 className="text-base font-bold">Class Performance Overview</h2>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <Filter className="w-4 h-4" strokeWidth={2} /> Filter
                        </button>
                        <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <Download className="w-4 h-4" strokeWidth={2} /> Export
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50/50 dark:bg-slate-800/30 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-100 dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Class Name</th>
                                <th className="px-6 py-4 font-semibold">Formateur</th>
                                <th className="px-6 py-4 font-semibold">Student Count</th>
                                <th className="px-6 py-4 font-semibold">Completion Rate</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 text-right font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {classes.map((cls, index) => (
                                <tr key={index} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-primary">{cls.name}</td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{cls.formateur}</td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{cls.students} Students</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-28 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                                                <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${cls.completion}%` }} />
                                            </div>
                                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{cls.completion}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge variant={cls.status === 'Active' ? 'success' : 'primary'} size="sm">
                                            {cls.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors">
                                            <MoreVertical className="w-5 h-5" strokeWidth={2} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default AdminDashboard;
