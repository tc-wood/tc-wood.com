import Image from 'next/image';

import githubIcon from '../assets/github-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import emailIcon from '../assets/email-icon.svg';
import { PageContainer } from './components';

export default function Home() {
    return (
        <PageContainer>
            <h1 className="text-4xl font-bold mb-8 whitespace-nowrap">
                &gt; tom wood <span className="cursor-blink">_</span>
            </h1>
            <h2 className="text-2xl font-semibold mb-8">
                he/him - 19 - uk - developer
            </h2>
            <div className='flex justify-evenly'>
                <a href="https://github.com/tc-wood" target="_blank" rel="noopener noreferrer">
                    <Image src={githubIcon} alt="github" className="w-12" />
                </a>
                <a href="https://www.linkedin.com/in/thomas-wood-444314250/" target="_blank" rel="noopener noreferrer">
                    <Image src={linkedinIcon} alt="linkedin" className="w-12" />
                </a>
                <a href="mailto:t.woody5work@gmail.com">
                    <Image src={emailIcon} alt="email" className="w-12" />
                </a>
            </div>
        </PageContainer>
    );
} 