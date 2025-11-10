import { ReactNode } from "react";
import Image from "next/image";

import blogImage1_1 from "../../assets/blog-1-1.jpg";
import blogImage2_1 from "../../assets/blog-2-1.jpg";
import snakeIcon from "../../assets/snake-icon.svg";

export interface BlogPost {
    id: string;
    title: string;
    date: Date;
    latest?: boolean;
    content: ReactNode;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: "is this thing on?",
        date: new Date(2025, 1, 15),
        content: (
            <>
                <p className="text-md mb-4">
                    i've decided to set up a blog page! this is where i'll be posting about thoughts, projects, ideas, links to stuff i've found interesting, etc. check back in occasionally to see what i've been up to!
                </p>
                <Image 
                    src={blogImage1_1} 
                    alt="black french bulldog in a cardboard box"
                    placeholder="blur"
                    className="w-4/5 border-2 border-gray-700 rounded-md mx-auto mb-2"
                />
                <p className="text-sm text-gray-500 italic mb-4">
                    hello from ben!
                </p>
            </>
        )
    },
    {
        id: '2',
        title: "life, work, and ideas",
        date: new Date(2025, 5, 11),
        content: (
            <>
                <p className="text-md mb-4">
                    hi everyone! :) i know that whenever somebody starts a blog they never actually post anything, but i said i'd use this, so here i am.
                </p>
                <p className="text-md mb-4">
                    work has been super busy lately, but i'm slowly finding the time to work on my own personal stuff. it might do me some good to spend some time thinking about something other than work deadlines. life has also gotten in the way a little bit, i've been thrown a few curveballs these past few months that i think i'm still recovering from.
                </p>
                <Image 
                    src={blogImage2_1} 
                    alt="cute cat on a gravel path"
                    placeholder="blur"
                    className="w-4/5 border-2 border-gray-700 rounded-md mx-auto mb-2"
                />
                <p className="text-sm text-gray-500 italic mb-4">
                    no matter how hard life gets, at least we have cats.
                </p>
                <p className="text-md mb-4">
                    i've been thinking about what could spice this site up a bit, and i think i've landed on an idea to have a page dedicated to tiny minigames! i could also have a leaderboard? that might be quite fun, and be a good challenge for me.
                </p>
                <p className="text-md">
                    hopefully i'll be able to start using this blog page more. i love this site, and i want it to show more of me.
                </p>
            </>
        )
    },
    {
        id: '3',
        title: "snake game! 🐍",
        date: new Date(2025, 10, 10),
        latest: true,
        content: (
            <>
                <p className="text-md mb-4">
                    i finally got around to making a minigame - and what better way to start than with snake? note that you'll need to be on a computer to play it (it uses keyboard controls).
                </p>
                <p className="text-md mb-4">
                    this mini-project taught me how to use canvas. it's pretty powerful combined with react hooks!
                </p>
                <p className="text-md mb-4">
                    there's a bug with the score incrementing by 2 instead of 1. i'll fix it soon :P
                </p>
                <a href="/games/snake" className="transition-transform hover:scale-[1.05] inline-block font-bold">
                    <Image src={snakeIcon} alt="snake" className="w-12" />
                    snake
                </a>
            </>
        )
    },
];

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};