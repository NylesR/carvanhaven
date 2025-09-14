type CardProps = {
  header: string;
  text: string;
};

export default function Card({ header, text }: CardProps) {
  return (
    <div className="text-charcoal bg-foreground text-center p-8 rounded shadow flex-1 hover:scale-105 transition-transform duration-300">
      <h2 className="text-3xl font-bold mb-2">{header}</h2>
      <p className="text-xl">{text}</p>
    </div>
  );
}