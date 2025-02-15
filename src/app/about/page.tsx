import { PageContainer, Container, TextLink } from "../components";
import Image from "next/image";
import meImage from "../../assets/me.jpg";

export default function About() {
    return (
        <PageContainer>
            <TextLink href="/">
                &lt; back
            </TextLink>
            <Container>
                <h3 className="text-3xl font-bold mb-4">
                    &gt; about me <span className="cursor-blink">_</span>
                </h3>
                <p className="text-md mb-4">
                    hello! i'm tom, a 19-year-old software developer based in the uk.
                </p>
                <Image 
                    src={meImage} 
                    alt="selfie" 
                    className="w-3/5 border-2 border-gray-700 rounded-md mx-auto mb-4"
                />
                <p className="text-md mb-4">
                    when i'm not coding, i'm usually playing video games or at my local trading card store.
                </p>
                <p className="text-md mb-4">
                    you'll find all of my socials on the home page. feel free to reach out about projects, or just to say hi!
                </p>
            </Container>
        </PageContainer>
    );
}