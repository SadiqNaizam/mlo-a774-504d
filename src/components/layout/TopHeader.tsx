import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const TopHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background px-6">
      {/* Left side: Hamburger Menu */}
      <div>
        <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      {/* Right side: Notifications and User Profile */}
      <div className="flex items-center gap-4">
        {/* Notifications Icon */}
        <div className="relative">
          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          {/* Notification Indicator Dot */}
          <span className="absolute right-1.5 top-1.5 flex h-2.5 w-2.5">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </span>
        </div>

        <Separator orientation="vertical" className="h-6" />

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://i.pravatar.cc/40?u=eleanor" alt="Eleanor Vance" />
            <AvatarFallback>EV</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5 text-sm">
            <p className="font-medium text-foreground">Eleanor Vance</p>
            <p className="text-xs text-muted-foreground">Data Analyst</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
