

import { auth, signOut } from '@/auth';
import Link from 'next/link';
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import { UserNav } from "@/components/layout/user-nav";
import { NavigationMenuDemo } from "@/components/layout/pub-nav";
import * as React from "react"

const Header = async () => {
  const session = await auth();
  const user = session?.user;

  const logoutAction = async () => {
    'use server';
    await signOut();
  };

 

  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
    <nav className="h-14 flex items-center justify-between px-4">
      <div className="hidden lg:flex flex-row items-center">
        <div className="basis-1/2">
          
          <Link
            href={"/"}
          >
            <img src="/images/logo-lppsa.png" alt="" width="100"/>
          </Link>

        </div>
        <div className="basis-1/2 pl-10">
          <NavigationMenuDemo />
        </div>
      
      
      </div>
      <div className={cn("block lg:!hidden")}>
        <MobileSidebar />
      </div>

      <div className="flex items-center gap-2">
      
        <UserNav />
        <ThemeToggle />
      </div>
    </nav>
  </div>
  );
};

export default Header;



