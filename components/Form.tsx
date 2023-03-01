interface Props {
    value: string;
    name?:string
    placeholder: string;
    onChange: (value: string) => void
    type?: string;
    className?: string;
}

export default function Form(props: Props) {
    return (
        <input
            type={props.type ? props.type : 'text'}
            className={`bg-zinc-100 py-2 px-3 ${props.className}`}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            name={props.name}
        />
    )
}