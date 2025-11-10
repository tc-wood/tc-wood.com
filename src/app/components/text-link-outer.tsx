import Link from "next/link";

interface TextLinkOuterProps {
    children: React.ReactNode;
    href: string;
}

export default function TextLinkOuter({ children, href }: TextLinkOuterProps) {
    return (
        <Link href={href} className="inline-block text-lg font-semibold text-gray-300 text-left hover:scale-[1.05] transition-transform">
            {children}
        </Link>
    );
}