interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className="items-center text-center bg-gray-300 p-8 my-2 rounded-lg border-r-4 border-b-4 border-[#888888]">
            {children}
        </div>
    );
}