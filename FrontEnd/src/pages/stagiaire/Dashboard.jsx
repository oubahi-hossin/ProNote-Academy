import { Link } from 'react-router-dom';
import { Card, Badge, Button, PageHeader } from '../../components/common';
import { Breadcrumbs } from '../../components/layout';
import { TrendingUp, CheckCircle, BookOpen, FileText, CheckSquare, Code, Palette, Terminal, BookMarked } from 'lucide-react';

const StagiaireDashboard = () => {
    const kpis = [
        { icon: TrendingUp, label: 'Semester Average', value: '16.5', suffix: '/ 20', color: 'blue' },
        { icon: CheckCircle, label: 'Attendance Rate', value: '94%', change: '+2%', color: 'emerald' },
    ];

    const modules = [
        { name: 'Advanced Web Design (UI/UX)', progress: 85 },
        { name: 'Full-Stack Development with React', progress: 60 },
        { name: 'Database Management & Security', progress: 45 },
        { name: 'Digital Marketing Essentials', progress: 100 },
    ];

    const announcements = [
        { title: 'New Grade Posted in Math', desc: 'The results for your midterm exam are now available in the portal.', time: '2 hours ago', color: 'bg-primary' },
        { title: 'Class Rescheduled: Tuesday', desc: 'The Tuesday 10 AM Full-Stack session has been moved to Wednesday 2 PM.', time: 'Yesterday', color: 'bg-amber-500' },
        { title: 'Workshop: Resume Writing', desc: 'Join the career development office this Friday for an exclusive resume building workshop.', time: '3 days ago', color: 'bg-slate-400' },
    ];

    const resources = [
        { icon: Code, title: 'Tailwind CSS v3 Guide', type: 'Cheat Sheet', bgClass: 'bg-primary/10', iconClass: 'text-primary/50', labelClass: 'text-primary' },
        { icon: Palette, title: 'Color Theory for UI', type: 'Article', bgClass: 'bg-amber-100/60 dark:bg-amber-900/20', iconClass: 'text-amber-500/50', labelClass: 'text-amber-600' },
        { icon: Terminal, title: 'Git Workflow Pro', type: 'Video', bgClass: 'bg-emerald-100/60 dark:bg-emerald-900/20', iconClass: 'text-emerald-500/50', labelClass: 'text-emerald-600' },
        { icon: BookMarked, title: 'Software Architecture', type: 'PDF', bgClass: 'bg-slate-100 dark:bg-slate-800', iconClass: 'text-slate-400/50', labelClass: 'text-slate-500' },
    ];

    const iconColorClasses = {
        blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
        emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
        amber: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
    };

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <Breadcrumbs items={[{ label: 'Dashboard' }]} />

            <div>
                <h1 className="text-4xl font-extrabold tracking-tight">Hello, Alex!</h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg mt-2">Here is your academic overview for the Fall 2024 semester.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {kpis.map((kpi, index) => (
                    <Card key={index} hover className="flex items-center gap-5 group">
                        <div className={`size-16 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform ${iconColorClasses[kpi.color]}`}>
                            <kpi.icon className="w-8 h-8" strokeWidth={2} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{kpi.label}</p>
                            <div className="flex items-baseline gap-2 mt-0.5">
                                <h3 className="text-3xl font-bold tracking-tight">{kpi.value}</h3>
                                {kpi.suffix && <span className="text-slate-400">{kpi.suffix}</span>}
                                {kpi.change && <span className="text-emerald-500 text-sm font-bold">{kpi.change} ↑</span>}
                            </div>
                        </div>
                    </Card>
                ))}

                <Card hover className="flex items-center gap-5 group bg-primary text-white border-none">
                    <div className="size-16 rounded-2xl flex items-center justify-center bg-white/20 group-hover:scale-105 transition-transform">
                        <BookOpen className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white/70">Modules Completed</p>
                        <div className="flex items-baseline gap-2 mt-0.5">
                            <h3 className="text-3xl font-bold tracking-tight text-white">12 / 16</h3>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 space-y-6">
                    <Card padding="none">
                        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <h2 className="text-lg font-bold">Module Completion Progress</h2>
                            <Link to="/stagiaire/grades" className="text-primary text-sm font-semibold hover:underline">View All</Link>
                        </div>
                        <div className="p-5 space-y-5">
                            {modules.map((module, index) => (
                                <div key={index} className="space-y-2.5">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{module.name}</p>
                                        <p className="text-sm font-bold text-primary">{module.progress}%</p>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-500 ${module.progress === 100 ? 'bg-emerald-500' : 'bg-primary'}`}
                                            style={{ width: `${module.progress}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Card>
                            <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Upcoming Assignment</h4>
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl ${iconColorClasses.amber}`}>
                                    <FileText className="w-6 h-6" strokeWidth={2} />
                                </div>
                                <div>
                                    <p className="font-bold leading-tight text-slate-900 dark:text-white">UI Prototype Submission</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Due in 2 days</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Latest Grade</h4>
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl ${iconColorClasses.emerald}`}>
                                    <CheckSquare className="w-6 h-6" strokeWidth={2} />
                                </div>
                                <div>
                                    <p className="font-bold leading-tight text-slate-900 dark:text-white">Project Architecture Quiz</p>
                                    <p className="text-emerald-600 font-bold mt-1 text-sm">18 / 20 • Excellent</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <Card padding="none" className="flex flex-col h-fit">
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                        <h2 className="text-lg font-bold">Announcements</h2>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {announcements.map((item, index) => (
                            <div key={index} className="p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                                <div className="flex gap-3">
                                    <div className={`size-2 mt-2 rounded-full shrink-0 group-hover:scale-125 transition-transform ${item.color}`} />
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold leading-snug truncate">{item.title}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{item.desc}</p>
                                        <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-tight">{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/30 text-center border-t border-slate-100 dark:border-slate-800">
                        <button className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest transition-colors">
                            Mark all as read
                        </button>
                    </div>
                </Card>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold tracking-tight">Recommended Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {resources.map((resource, index) => (
                        <Card key={index} padding="none" hover className="overflow-hidden group">
                            <div className={`h-28 relative overflow-hidden ${resource.bgClass}`}>
                                <div className={`absolute inset-0 flex items-center justify-center ${resource.iconClass}`}>
                                    <resource.icon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                                </div>
                            </div>
                            <div className="p-4">
                                <p className={`text-[10px] font-bold uppercase tracking-wider ${resource.labelClass}`}>{resource.type}</p>
                                <h5 className="text-sm font-bold mt-1 text-slate-900 dark:text-white">{resource.title}</h5>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StagiaireDashboard;
