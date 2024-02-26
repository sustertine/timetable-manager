import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from './ui/table';
import {Activity} from "@/models/activity.model";

const Timetable: React.FC<{ activities?: Activity[] }> = ({ activities = [] }) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const generateTimeSlots = () => {
        const timeSlots = [];
        let currentHour = 7;
        let currentMinute = 0;

        while (currentHour < 21 || (currentHour === 20 && currentMinute < 30)) {
            const timeSlot = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
            timeSlots.push(timeSlot);

            currentMinute += 30;
            if (currentMinute === 60) {
                currentMinute = 0;
                currentHour += 1;
            }
        }

        return timeSlots;
    };

    const timeSlots = generateTimeSlots();

    const activityMap = activities.reduce((map, activity) => {
        const key = `${activity.day}-${activity.time}`;
        map[key] = activity.description;
        return map;
    }, {} as Record<string, string>);

    // Get today's date
    const today = new Date();
    const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Timetable</h1>
            <p className="mb-4">Today's date: {formattedDate}</p>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead></TableHead>
                        {days.map((day, index) => (
                            <TableHead key={index}>{day}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {timeSlots.map((timeSlot, index) => (
                        <TableRow key={index}>
                            <TableCell>{timeSlot}</TableCell>
                            {days.map((day, index) => {
                                const activity = activityMap[`${day}-${timeSlot}`];
                                return <TableCell key={index}>{activity}</TableCell>;
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
export default Timetable;