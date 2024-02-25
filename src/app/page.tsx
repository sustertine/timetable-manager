import Timetable from "@/components/timetable";
import {ModeToggle} from "@/components/mode-toggle";
import {Activity} from "@/models/activity.model";

export default function Home() {
    const activities: Activity[] = [
        { day: 'Monday', time: '9:00', description: 'Math Class' },
        { day: 'Tuesday', time: '10:00', description: 'English Class' },
        { day: 'Wednesday', time: '11:00', description: 'Science Class' },
        { day: 'Thursday', time: '12:00', description: 'History Class' },
        { day: 'Friday', time: '13:00', description: 'Art Class' },
    ];
  return (
      <div className="flex flex-col h-screen">
        <header className="bg-blue-200">
            Header
            <ModeToggle />
        </header>
        <div className="flex flex-grow md:flex-row flex-col">
          <aside className="bg-green-200 md:w-64 w-full">Sidebar</aside>
          <main className="flex-grow">
              <Timetable activities={activities} />
          </main>
        </div>
        <footer className="bg-pink-200">Footer</footer>
      </div>
  );
}
