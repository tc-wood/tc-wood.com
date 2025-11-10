import { Container, PageContainer, TextLinkOuter } from "../components";
import Link from 'next/link';
import { blogPosts, formatDate } from "./posts";

export default function Blog() {
    const sortedPosts = [...blogPosts].sort((a, b) => b.date.getTime() - a.date.getTime());
    
    return (
        <PageContainer>
            <div className="grid gap-6">
                {sortedPosts.map((post) => (
                    <Link 
                        key={post.id} 
                        href={`/blog/${post.id}`}
                        className="block transition-transform hover:scale-[1.02]"
                    >
                        <Container>
                            <h2 className="text-3xl font-bold mb-2">
                                &gt; {post.title} <span className="cursor-blink">_</span>
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-500 italic">
                                {formatDate(post.date)} &gt;
                            </h3>
                            {post.latest && (
                                <span className="text-lg font-semibold text-red-700">• latest post</span>
                            )}
                        </Container>
                    </Link>
                ))}
            </div>
            <TextLinkOuter href="/">
                &lt; back
            </TextLinkOuter>
        </PageContainer>
    );
} 