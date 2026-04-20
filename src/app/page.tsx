import githubIcon from '../assets/github-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import emailIcon from '../assets/email-icon.svg';

import { Container, PageContainer, TextLinkOuter, IconLink } from './components';

export default function Home() {
    return (
        <PageContainer>
            <Container>
                <h1 className="text-4xl font-bold mb-8">
                    &gt; tom wood <span className="cursor-blink">_</span>
                </h1>
                <h2 className="text-2xl font-semibold mb-8">
                    software developer @ <a href="https://www.ucl.ac.uk/" target="_blank" rel="noopener noreferrer" className="inline-block font-bold hover:scale-[1.05] transition-transform">UCL</a>
                </h2>
                <div className='flex justify-evenly'>
                    <IconLink icon={githubIcon} alt="github" href="https://github.com/tc-wood" />
                    <IconLink icon={linkedinIcon} alt="linkedin" href="https://www.linkedin.com/in/thomas-wood-444314250/" />
                    <IconLink icon={emailIcon} alt="email" href="mailto:t.woody5work@gmail.com" />
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
            </div>
        </PageContainer>
    );
}