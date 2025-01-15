import { PageContainer } from "./components";

export default function NotFound() {
    return (
        <PageContainer>
            <h1 className="text-4xl font-bold text-red-900 mb-8 whitespace-nowrap">
                &gt; 404 - page not found <span className="cursor-blink">_</span>
            </h1>
            <h2 className="text-2xl font-semibold">
                check the URL and try again
            </h2>
        </PageContainer>
    );
}