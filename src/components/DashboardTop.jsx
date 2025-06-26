import { Bell, User } from "lucide-react";

export default function DashboardTop() {
  return (
    <div className="bg-[#E8E9F3] px-5 md:px-10 lg:px-20 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-[#0B2088] mb-1">
          Welcome, Caringcompany
        </h1>
        <p className="text-[#5C5C5C] text-sm">Have a nice day!</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="bg-[#DBDEEF] p-2 rounded-full">
            <Bell className="w-5 h-5 text-[#0B2088]" />
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#0B2088] rounded-full"></div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#DBDEEF] p-2 rounded-full">
            <User className="w-5 h-5 text-[#0B2088]" />
          </div>
          <div>
            <p className="text-[#0B2088] font-medium text-sm">Caringcompany</p>
            <p className="text-[#5C5C5C] text-xs">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
