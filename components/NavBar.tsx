"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MessageCircle, User, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchDistance, setSearchDistance] = useState("10");
  const [searchType, setSearchType] = useState("family");

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Logo
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 w-40 lg:w-60"
                    />
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      size={18}
                    />
                  </div>
                  <Select
                    value={searchDistance}
                    onValueChange={setSearchDistance}
                  >
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="Distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 km</SelectItem>
                      <SelectItem value="10">10 km</SelectItem>
                      <SelectItem value="20">20 km</SelectItem>
                      <SelectItem value="50">50 km</SelectItem>
                      <SelectItem value="100">100 km</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={searchType} onValueChange={setSearchType}>
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="bachelor">Bachelor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <>
                <Link href={"/login"}>
                  {" "}
                  <Button variant="ghost">Login</Button>{" "}
                </Link>
                <Link href={"/signup"}>
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 py-4">
                {isLoggedIn ? (
                  <>
                    <div className="flex flex-col items-center gap-2">
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full"
                      />
                      <Select
                        value={searchDistance}
                        onValueChange={setSearchDistance}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Distance" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 km</SelectItem>
                          <SelectItem value="10">10 km</SelectItem>
                          <SelectItem value="20">20 km</SelectItem>
                          <SelectItem value="50">50 km</SelectItem>
                          <SelectItem value="100">100 km</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={searchType} onValueChange={setSearchType}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="family">Family</SelectItem>
                          <SelectItem value="bachelor">Bachelor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="ghost" className="w-full justify-start">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-2 h-5 w-5" />
                      Profile
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" className="w-full justify-start">
                      Login
                    </Button>
                    <Button className="w-full">Sign Up</Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* This button is just for demonstration purposes */}
      <Button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="absolute top-20 right-4"
      >
        Toggle Login State
      </Button>
    </nav>
  );
}
