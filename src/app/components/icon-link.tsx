import Image from "next/image";

interface IconLinkProps {
    href: string;
    icon: string;
    alt: string;
}

export default function IconLink({ icon, alt, href }: IconLinkProps) {
    return (
        <a href={href} className="transition-transform hover:scale-[1.05]">
            <Image src={icon} alt={alt} className="w-12" />
        </a>
    );
}