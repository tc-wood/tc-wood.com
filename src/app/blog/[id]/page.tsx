import { Container, PageContainer, TextLink } from "../../components";
import { notFound } from "next/navigation";
import { blogPosts, formatDate } from "../posts";

interface BlogPostPageProps {
    params: {
        id: string;
    };
}

export default function BlogPost({ params }: BlogPostPageProps) {
    const post = blogPosts.find(post => post.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <PageContainer>
            <TextLink href="/blog">
                &lt; back to posts
            </TextLink>
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
            <div className="mb-16"></div>
        </PageContainer>
    );
} 