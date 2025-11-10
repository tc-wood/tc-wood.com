import { Container, PageContainer, TextLinkOuter } from "../../components";
import { notFound } from "next/navigation";
import { blogPosts, formatDate } from "../posts";

export const generateStaticParams = async () => {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
};
export type paramsType = Promise<{ id: string }>;

export default async function BlogPost({ params }: { params: paramsType }) {
    const { id } = await params;
    const post = blogPosts.find(post => post.id === id);

    if (!post) {
        notFound();
    }

    return (
        <PageContainer>
            <Container>
                <h1 className="text-3xl font-bold mb-2">
                    &gt; {post.title} <span className="cursor-blink">_</span>
                </h1>
                <h2 className="text-lg font-semibold text-gray-500 italic mb-4">
                    {formatDate(post.date)}
                </h2>
                <div>
                    {post.content}
                </div>
            </Container>
            <TextLinkOuter href="/blog">
                &lt; back to posts
            </TextLinkOuter>
        </PageContainer>
    );
} 