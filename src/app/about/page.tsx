import { PageContainer, Container, TextLinkOuter } from "../components";
import Image from "next/image";
import meImage from "../../assets/me.jpg";

export default function About() {
    return (
        <PageContainer>
            <Container>
                <h3 className="text-3xl font-bold mb-4">
                    &gt; about me <span className="cursor-blink">_</span>
                </h3>
                <p className="text-md mb-4">
                    hello! i'm tom, a 20-year-old software developer based in the UK.
                </p>
                <Image 
                    src={meImage} 
                    alt="selfie"
                    placeholder="blur"
                    className="w-4/5 border-2 border-gray-700 rounded-md mx-auto mb-2"
                />
                <p className="text-sm text-gray-500 italic mb-4">
                    me. hi!
                </p>
                <p className="text-md mb-4">
                    i specialise in software development, but in the past have written games with Unity, and mobile apps with React Native. i've also worked on CI/CD pipelines using GitHub Actions, and event-driven data integrations with AWS Lambda and SQS.
                </p>
                <p className="text-md mb-4">
                    when i'm not coding, i'm usually playing video games, watching the football (COYG ❤️), or at my local trading card store.
                </p>
                <p className="text-md">
                    you'll find some of my "professional" contact info on the home page. feel free to reach out (professionally or otherwise :D)!
                </p>
            </Container>
            <TextLinkOuter href="/">
                &lt; back
            </TextLinkOuter>
        </PageContainer>
    );
}