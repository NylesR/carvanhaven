type CardProps = {
  question: string;
  answer: React.ReactNode;
};

export default function FAQCard({ question, answer }: CardProps) {
    return (
        <>
            <div className="bg-accent text-center p-8 rounded shadow flex-1 hover:scale-105 transition-transform duration-300">
                <h2 className="font-bold text-xl">Q: {question}</h2>
                <p> {answer}</p>
            </div>
        </>
    )
}