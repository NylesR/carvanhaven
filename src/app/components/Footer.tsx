export default function Footer(){
    return (
        <footer className="bg-primary text-foreground flex-column items-center p-4 text-center md:flex-row md:justify-between">
            <p className="font-bold">Contact Us:</p>
            <a className="text-accent block" href="mailto:info@carvanhaven.com">info@carvanhaven.com</a>
            <a className="text-accent block" href="tel:5183107750">(518) 310-7750</a>
            <p>&copy; 2025 CarVan Haven. All rights reserved.</p>
        </footer>
    );
}
