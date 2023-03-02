import CountDownItem from "./CountDownItem";

interface Props {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountRenderer(props: Props) {
    return (
        <div className="flex flex-row mx-auto justify-center">
            <CountDownItem value={props.days} label={'Hari'} />
            <CountDownItem value={props.hours} label={'Jam'} />
            <CountDownItem value={props.minutes} label={'Menit'} />
            <CountDownItem value={props.seconds} label={'Detik'} />
        </div>
    )
}