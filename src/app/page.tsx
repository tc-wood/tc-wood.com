import Image from 'next/image';

import githubIcon from '../assets/github-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import emailIcon from '../assets/email-icon.svg';
import { Container, PageContainer, TextLinkOuter } from './components';

export default function Home() {
    return (
        <PageContainer>
            <Container>
                <h1 className="text-4xl font-bold mb-8">
                    &gt; tom wood <span className="cursor-blink">_</span>
                </h1>
                <h2 className="text-2xl font-semibold mb-8">
                    software developer @ <a href="https://www.ucl.ac.uk/" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-[1.05] transition-transform">UCL</a>
                </h2>
                <div className='flex justify-evenly'>
                    <a href="https://github.com/tc-wood" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-[1.05]">
                        <Image src={githubIcon} alt="github" className="w-12" />
                    </a>
                    <a href="https://www.linkedin.com/in/thomas-wood-444314250/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-[1.05]">
                        <Image src={linkedinIcon} alt="linkedin" className="w-12" />
                    </a>
                    <a href="mailto:t.woody5work@gmail.com" className="transition-transform hover:scale-[1.05]">
                        <Image src={emailIcon} alt="email" className="w-12" />
                    </a>
                </div>
            </Container>
            <div className="flex gap-4">
                <TextLinkOuter href="/blog">
                    blog
                </TextLinkOuter>
                <span className="text-lg text-gray-300">
                •
                </span>
                <TextLinkOuter href="/about">
                    about
                </TextLinkOuter>
                <span className="text-lg text-gray-300">
                •
                </span>
                <TextLinkOuter href="/games">
                    games
                </TextLinkOuter>
            </div>
        </PageContainer>
    );
}