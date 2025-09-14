export default function Header({ title }: { title: string }) {
    return (
        <div className="text-center my-8">
            <h1 className="text-foreground text-4xl font-bold text-charcoal">{title}</h1>
        </div>
    )
}