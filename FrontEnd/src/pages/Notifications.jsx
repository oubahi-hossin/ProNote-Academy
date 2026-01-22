import { useState } from 'react';
import { Card, Badge, PageHeader, Button } from '../components/common';
import { Breadcrumbs } from '../components/layout';

const Notifications = () => {
    const [notifications] = useState([
        { id: 1, type: 'grade', title: 'New Grade Posted', desc: 'Your grade for "React Fundamentals" has been posted.', time: '2 hours ago', read: false },
        { id: 2, type: 'schedule', title: 'Class Rescheduled', desc: 'The Tuesday 10 AM session has been moved to Wednesday 2 PM.', time: '5 hours ago', read: false },
        { id: 3, type: 'announcement', title: 'Workshop: Resume Writing', desc: 'Join the career development office this Friday for an exclusive workshop.', time: '1 day ago', read: true },
        { id: 4, type: 'grade', title: 'Grade Updated', desc: 'Your grade for "Database Management" has been updated.', time: '2 days ago', read: true },
        { id: 5, type: 'system', title: 'System Maintenance', desc: 'Scheduled maintenance this weekend from 2 AM to 6 AM.', time: '3 days ago', read: true },
    ]);

    const getTypeIcon = (type) => {
        const icons = {
            grade: 'grade',
            schedule: 'calendar_today',
            announcement: 'campaign',
            system: 'settings',
        };
        return icons[type] || 'notifications';
    };

    const getTypeColorClass = (type) => {
        const colors = {
            grade: 'stat-icon-emerald',
            schedule: 'stat-icon-amber',
            announcement: 'stat-icon-blue',
            system: 'stat-icon-gray',
        };
        return colors[type] || 'stat-icon-blue';
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: 'Notifications' }]} />

            <PageHeader
                title="Notifications"
                subtitle="Stay updated with your latest alerts and announcements."
            >
                <Button variant="ghost" icon="done_all">Mark All Read</Button>
            </PageHeader>

            {/* Notification Stats */}
            <div className="flex gap-4 flex-wrap">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                    <span className="size-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                        {notifications.filter(n => !n.read).length}
                    </span>
                    Unread
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 text-slate-500 px-4 py-2 rounded-xl text-sm font-semibold">
                    {notifications.length} Total
                </div>
            </div>

            {/* Notifications List */}
            <Card padding="none">
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`p-5 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer ${!notification.read ? 'bg-primary/5 dark:bg-primary/10' : ''
                                }`}
                        >
                            <div className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${getTypeColorClass(notification.type)}`}>
                                <span className="material-symbols-outlined text-[24px]">{getTypeIcon(notification.type)}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <p className={`text-sm font-semibold ${!notification.read ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                                            {notification.title}
                                        </p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{notification.desc}</p>
                                    </div>
                                    {!notification.read && (
                                        <span className="size-2.5 rounded-full bg-primary shrink-0 mt-1.5" />
                                    )}
                                </div>
                                <p className="text-xs text-slate-400 mt-2 font-medium">{notification.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Load More */}
            <div className="text-center">
                <Button variant="secondary">Load More Notifications</Button>
            </div>
        </div>
    );
};

export default Notifications;
