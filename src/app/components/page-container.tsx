interface PageContainerProps {
    children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <div className="min-h-screen flex items-center justify-center scanline-container">
            <div className="max-w-4xl items-center text-center bg-gray-300 p-8 m-8 rounded-lg border-r-4 border-b-4 border-[#888888]">
                {children}
            </div>
        </div>
    );
}