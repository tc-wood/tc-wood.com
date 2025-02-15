import { Container, PageContainer, TextLink } from "./components";

export default function NotFound() {
    return (
        <PageContainer>
            <TextLink href="/">
                &lt; back
            </TextLink>
            <Container>
                <h1 className="text-3xl font-bold text-red-900 mb-8">
                    &gt; 404 - page not found <span className="cursor-blink">_</span>
                </h1>
            <h2 className="text-2xl font-semibold">
                    check the URL and try again.
                </h2>
            </Container>
        </PageContainer>
    );
}