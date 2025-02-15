interface PageContainerProps {
    children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[90vw] md:max-w-[40vw] min-h-screen flex flex-col justify-center items-center py-16 scanline-container">
                <div className="w-full max-w-[500px]">
                    {children}
                </div>
            </div>
        </div>
    );
}