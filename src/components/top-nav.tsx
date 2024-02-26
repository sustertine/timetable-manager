import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {ModeToggle} from "@/components/mode-toggle";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const TopNav = () => {
    const useAuth = () => {
        const user = {name: 'John Doe', email: 'john.doe@example.com'};

        const login = () => {
            console.log('Logging in...');
        };

        const signup = () => {
            console.log('Signing up...');
        };

        const logout = () => {
            console.log('Logging out...');
        };

        return {user, login, signup, logout};
    };

    const {user, login, signup, logout} = useAuth();

    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
                <Image src="/next.svg" alt="Logo" width={150} height={75} className="mr-6"/>
                <h1 className="text-xl font-bold">Timetable manager</h1>
            </div>
            <NavigationMenu>
                {!user ? (
                    <>
                        <NavigationMenuTrigger asChild>
                            <Button>Login</Button>
                        </NavigationMenuTrigger>
                        <NavigationMenuItem>
                            <Button>Sign Up</Button>
                        </NavigationMenuItem>
                    </>
                ) : (
                    <NavigationMenuItem>
                        <Button>Logout</Button>
                    </NavigationMenuItem>
                )}
            </NavigationMenu>
            <div className="flex items-center">
                <Avatar className="mr-3">
                    <AvatarImage src="/avatar.svg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <ModeToggle/>
            </div>
        </div>
    );
};

export default TopNav;