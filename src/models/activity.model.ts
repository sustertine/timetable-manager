import {Day} from "@/models/day.enum";

export interface Activity {
    day: Day;
    startTime: Date;
    endTime: Date;
    title: string;
    description: string;
}