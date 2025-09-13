export default function Header({ title }: { title: string }) {
    return (
        <div className="text-center my-8">
            <h1 className="text-4xl font-bold text-foreground">{title}</h1>
        </div>
    )
}