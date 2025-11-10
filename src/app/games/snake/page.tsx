import { PageContainer, Container, TextLinkOuter } from "../../components";
import SnakeGame from "./snake-game";

export default function Snake() {
    return (
        <PageContainer>
            <Container>
                <h3 className="text-3xl font-bold mb-4">
                    &gt; snake <span className="cursor-blink">_</span>
                </h3>
                <SnakeGame />
            </Container>
            <TextLinkOuter href="/games">
                &lt; back to games
            </TextLinkOuter>
        </PageContainer>
    );
}