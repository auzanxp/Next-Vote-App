interface Props {
    text: string;
    type?: string;
    className?: string;
    onClick?: () => void;
}

export default function Button(props: Props) {
    return (
        <button
            className={`bg-black border-black border-2 text-white px-3 py-2 rounded-md hover:bg-zinc-800
            ${props.type === "secondary" && "bg-white border-black border-2 text-black px-3 py-2 rounded-md hover:bg-black hover:text-white"}
            ${props.className}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}
