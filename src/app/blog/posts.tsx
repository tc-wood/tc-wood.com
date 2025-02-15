import { ReactNode } from "react";

export interface BlogPost {
    id: string;
    title: string;
    date: Date;
    content: ReactNode;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: "is this thing on?",
        date: new Date(2025, 1, 15),
        content: (
            <>
                <p className="text-md">
                    i've decided to set up a blog page! this is where i'll be posting about thoughts, projects, ideas, links to stuff i've found interesting, etc. check back in occasionally to see what i've been up to!
                </p>
            </>
        )
    },
];

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}; 