"use client";


import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from './ui/table';
import {Activity} from "@/models/activity.model";
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import {Button} from "@/components/ui/button";

const Timetable: React.FC<{ activities?: Activity[] }> = ({ activities = [] }) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const generateTimeSlots = () => {
        const timeSlots = [];
        for (let m = 420; m <= 1230; m += 30) {
            const hours = Math.floor(m / 60);
            const minutes = m % 60;
            timeSlots.push(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
        }
        return timeSlots;
    };

    const timeSlots = generateTimeSlots();

    const activityMap = activities.reduce((map, activity) => {
        const key = `${activity.day}-${activity.time}`;
        map[key] = activity.description;
        return map;
    }, {} as Record<string, string>);

    const today = new Date();
    const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

    return (
        <Card className="p-3">
            <CardTitle className="text-2xl font-bold mb-4">Timetable</CardTitle>
            <CardDescription className="mb-4">Today's date: {formattedDate}</CardDescription>
            <CardContent>
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
            </CardContent>
            <CardFooter className="flex flex-start space-x-4">
                <Button onClick={() => console.log('Add activity')}>Add Activity</Button>
                <Button onClick={() => console.log('Remove activity')}>Remove Activity</Button>
                <Button onClick={() => console.log('Edit activity')}>Edit Activity</Button>
            </CardFooter>
        </Card>
    );
};
export default Timetable;