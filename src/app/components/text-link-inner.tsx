import Link from "next/link";

interface TextLinkInnerProps {
    children: React.ReactNode;
    href: string;
}

export default function TextLinkInner({ children, href }: TextLinkInnerProps) {
    return (
        <Link href={href} className="inline-block text-lg font-semibold text-gray-800 hover:scale-[1.05] transition-transform">
            {children}
        </Link>
    );
}