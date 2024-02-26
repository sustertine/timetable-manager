import Timetable from "@/components/timetable";
import {Activity} from "@/models/activity.model";
import TopNav from "@/components/top-nav";
import {Day} from "@/models/day.enum";

export default function Home() {
    const activities: Activity[] = [
        {
            day: Day.MONDAY,
            startTime: new Date(2024, 1, 24, 9, 0),
            endTime: new Date(2024, 1, 24, 11, 0),
            title: "Meeting",
            description: "Team meeting to discuss project updates."
        },
        {
            day: Day.MONDAY,
            startTime: new Date(2024, 1, 24, 9, 0),
            endTime: new Date(2024, 1, 24, 12, 0),
            title: "Backlog meeting",
            description: "Meeting to discuss the backlog."
        },
        {
            day: Day.MONDAY,
            startTime: new Date(2024, 1, 24, 9, 0),
            endTime: new Date(2024, 1, 24, 13, 0),
            title: "Anime watch party",
            description: "Watch anime with friends."
        },
        {
            day: Day.TUESDAY,
            startTime: new Date(2024, 1, 25, 14, 0),
            endTime: new Date(2024, 1, 25, 16, 0),
            title: "Presentation",
            description: "Present new product features to stakeholders."
        },
        {
            day: Day.WEDNESDAY,
            startTime: new Date(2024, 1, 26, 10, 30),
            endTime: new Date(2024, 1, 26, 12, 0),
            title: "Training Session",
            description: "Training session on new software tools."
        },
        {
            day: Day.THURSDAY,
            startTime: new Date(2024, 1, 27, 11, 0),
            endTime: new Date(2024, 1, 27, 13, 0),
            title: "Client Meeting",
            description: "Meeting with potential client to discuss project requirements."
        },
        {
            day: Day.FRIDAY,
            startTime: new Date(2024, 1, 28, 15, 0),
            endTime: new Date(2024, 1, 28, 17, 0),
            title: "Team Building Activity",
            description: "Team building activity at local park."
        },
        {
            day: Day.MONDAY,
            startTime: new Date(2024, 2, 2, 19, 0),
            endTime: new Date(2024, 2, 2, 20, 30),
            title: "Project Review",
            description: "Review progress on ongoing projects."
        }
    ];
  return (
      <div className="flex flex-col h-screen">
        <header>
            <TopNav />
        </header>
        <div className="flex flex-grow md:flex-row flex-col">
          <aside className="bg-green-200 md:w-64 w-full">Sidebar</aside>
          <main className="flex-grow p-4">
              <Timetable activities={activities} />
          </main>
        </div>
        <footer className="bg-pink-200">Footer</footer>
      </div>
  );
}
