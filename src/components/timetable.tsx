"use client";

import React from 'react';

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from './ui/table';
import {Activity} from "@/models/activity.model";
import {Card, CardTitle, CardDescription, CardContent, CardFooter, CardHeader} from '@/components/ui/card';
import {Button} from "@/components/ui/button";
import {Day} from "@/models/day.enum";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const Timetable: React.FC<{ activities?: Activity[] }> = ({activities = []}) => {
    activities.sort((a, b) => (b.endTime.getTime() - b.startTime.getTime()) - (a.endTime.getTime() - a.startTime.getTime()));

    const days = [Day.MONDAY, Day.TUESDAY, Day.WEDNESDAY, Day.THURSDAY, Day.FRIDAY];
    const minHour = activities.reduce((acc, curr) => curr.startTime.getHours() < acc ? curr.startTime.getHours() : acc, 24);
    const maxHour = activities.reduce((acc, curr) => curr.endTime.getHours() > acc ? curr.endTime.getHours() : acc, 0);

    const timeSlots = Array.from({ length: maxHour - minHour + 1 }, (_, i) => minHour + i);
    return (
        <Card className="p-3">
            <CardHeader>
                <CardTitle>Timetable</CardTitle>
                <CardDescription>
                    Manage your weekly activities.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                <b>Time | Day</b>
                            </TableHead>
                            {days.map(day =>
                                <TableHead key={day}>
                                    <b>{day}</b>
                                </TableHead>
                            )}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {timeSlots.map(hour => (
                            <TableRow key={hour}>
                                <TableCell><b>{hour}:00</b></TableCell>
                                {days.map(day => {
                                    const activitiesInTimeslot = activities.filter(activity => activity.day === day && activity.startTime.getHours() <= hour && activity.endTime.getHours() >= hour);
                                    return (
                                        <TableCell key={day}>
                                            <div className="flex flex-row">
                                                {activitiesInTimeslot.map(activity => (
                                                    <TooltipProvider key={activity.title}>
                                                        <Tooltip >
                                                            <TooltipTrigger asChild>
                                                                <Card className="p-2 mx-1">
                                                                    <CardDescription>{activity.title}</CardDescription>
                                                                </Card>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>{activity.description}</p>
                                                                &nbsp;
                                                                <p>G2P3-01</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                ))}
                                            </div>
                                        </TableCell>
                                    );
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