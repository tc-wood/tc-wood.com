import Link from "next/link";

interface TextLinkProps {
    children: React.ReactNode;
    href: string;
}

export default function TextLink({ children, href }: TextLinkProps) {
    return (
        <Link href={href} className="inline-block text-lg font-semibold text-gray-300 text-left hover:scale-[1.05] transition-transform">
            {children}
        </Link>
    );
}