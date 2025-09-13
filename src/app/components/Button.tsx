export default function Button({ children }: { children: React.ReactNode }) {
    return(
        <button className="bg-secondary text-foreground px-4 py-2 rounded hover:bg-secondary shadow transition hover:scale-105 duration-300">
            {children}
        </button>
    )
}