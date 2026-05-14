import { Link } from 'react-router-dom';
import { Card, Badge, PageHeader } from '../../components/common';
import { Breadcrumbs } from '../../components/layout';
import { BarChart3, Trophy, GraduationCap, Download } from 'lucide-react';

const MyGrades = () => {
    const grades = [
        { module: 'Advanced Web Design (UI/UX)', formateur: 'Marc Dupont', grade: 17.5, max: 20, date: 'Oct 15, 2024', status: 'Excellent' },
        { module: 'Full-Stack Development with React', formateur: 'Sophie Martin', grade: 15, max: 20, date: 'Oct 12, 2024', status: 'Good' },
        { module: 'Database Management & Security', formateur: 'Alain Richard', grade: 12, max: 20, date: 'Oct 10, 2024', status: 'Average' },
        { module: 'Digital Marketing Essentials', formateur: 'Jean Dupont', grade: 18, max: 20, date: 'Oct 8, 2024', status: 'Excellent' },
        { module: 'JavaScript Fundamentals', formateur: 'Marc Dupont', grade: 16, max: 20, date: 'Oct 5, 2024', status: 'Good' },
    ];

    const getGradeColor = (grade) => {
        if (grade >= 16) return 'text-emerald-600';
        if (grade >= 12) return 'text-amber-600';
        return 'text-red-600';
    };

    const getStatusVariant = (status) => {
        if (status === 'Excellent') return 'success';
        if (status === 'Good') return 'primary';
        return 'warning';
    };

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <Breadcrumbs items={[{ label: 'My Grades' }]} />

            <PageHeader
                title="My Grades"
                subtitle="View your academic performance across all modules."
            />

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Card hover className="text-center">
                    <div className="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 size-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Overall Average</p>
                    <p className="text-3xl font-bold mt-1 tracking-tight">15.7<span className="text-slate-400 text-lg">/ 20</span></p>
                </Card>
                <Card hover className="text-center">
                    <div className="bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 size-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Highest Grade</p>
                    <p className="text-3xl font-bold mt-1 tracking-tight text-emerald-600">18<span className="text-slate-400 text-lg">/ 20</span></p>
                </Card>
                <Card hover className="text-center">
                    <div className="bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 size-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Modules Graded</p>
                    <p className="text-3xl font-bold mt-1 tracking-tight">{grades.length}</p>
                </Card>
            </div>

            {/* Grades Table */}
            <Card padding="none">
                <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <h2 className="text-lg font-bold">Grade History</h2>
                    <button className="text-primary text-sm font-semibold hover:underline flex items-center gap-1.5">
                        <Download className="w-[18px] h-[18px]" strokeWidth={2} />
                        Export
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Module</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Formateur</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Grade</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {grades.map((grade, index) => (
                                <tr key={index} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{grade.module}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{grade.formateur}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-lg font-bold ${getGradeColor(grade.grade)}`}>
                                            {grade.grade}
                                        </span>
                                        <span className="text-slate-400 text-sm">/ {grade.max}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{grade.date}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={getStatusVariant(grade.status)} size="sm">{grade.status}</Badge>
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

export default MyGrades;
