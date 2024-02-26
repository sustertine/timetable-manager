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
            endTime: new Date(2024, 1, 24, 11, 0),
            title: "Backlog meeting",
            description: "Meeting to discuss the backlog."
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
        // {
        //     day: Day.SATURDAY,
        //     startTime: new Date(2024, 1, 29, 9, 0),
        //     endTime: new Date(2024, 1, 29, 12, 0),
        //     title: "Workshop",
        //     description: "Workshop on effective project management strategies."
        // },
        // {
        //     day: Day.SUNDAY,
        //     startTime: new Date(2024, 2, 1, 13, 0),
        //     endTime: new Date(2024, 2, 1, 15, 0),
        //     title: "Webinar",
        //     description: "Webinar on latest industry trends."
        // },
        // {
        //     day: Day.MONDAY,
        //     startTime: new Date(2024, 2, 2, 9, 0),
        //     endTime: new Date(2024, 2, 2, 10, 30),
        //     title: "Project Review",
        //     description: "Review progress on ongoing projects."
        // },
        // {
        //     day: Day.TUESDAY,
        //     startTime: new Date(2024, 2, 3, 16, 0),
        //     endTime: new Date(2024, 2, 3, 18, 0),
        //     title: "Brainstorming Session",
        //     description: "Brainstorm ideas for upcoming marketing campaign."
        // },
        // {
        //     day: Day.WEDNESDAY,
        //     startTime: new Date(2024, 2, 4, 10, 0),
        //     endTime: new Date(2024, 2, 4, 12, 0),
        //     title: "Training Workshop",
        //     description: "Workshop on advanced programming techniques."
        // }
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
