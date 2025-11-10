import { PageContainer, Container, TextLinkOuter, TextLinkInner } from "../components";
import snakeIcon from "../../assets/snake-icon.svg";
import Image from "next/image";

export default function Games() {
    return (
        <PageContainer>
            <Container>
                <h3 className="text-3xl font-bold mb-4">
                    &gt; games <span className="cursor-blink">_</span>
                </h3>
                <p className="text-md mb-4">
                    i've been working on minigames in my free time. you can play them here!
                </p>
                <a href="/games/snake" className="transition-transform hover:scale-[1.05] inline-block font-bold">
                    <Image src={snakeIcon} alt="snake" className="w-12" />
                    snake
                </a>
            </Container>
            <TextLinkOuter href="/">
                &lt; back
            </TextLinkOuter>
        </PageContainer>
    );
}