"use client";

import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {ModeToggle} from "@/components/mode-toggle";

const TopNav = () => {

    return (
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Image src="/next.svg" alt="Logo" width={150} height={75} className="mr-6"/>
                    <h1 className="text-xl font-bold">Timetable manager</h1>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Avatar className="mr-3">
                                    <AvatarImage src="/avatar.svg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button>Logout</Button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <ModeToggle />
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
    );
};

export default TopNav;