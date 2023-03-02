import Countdown, { CountdownRendererFn } from "react-countdown"
import CountRenderer from "./CountRenderer"

interface Props {
    className?: string
}

export default function CountDown(props: Props) {

    const countDown: CountdownRendererFn = ({
        days,
        hours,
        minutes,
        seconds
    }) => {
        return (
            <CountRenderer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        )
    }

    return (
        <div className={`text-center ${props.className}`}>
            <p>Voting akan dimulai pada:</p>
            <Countdown
                date={Date.now() + 5000}
                renderer={countDown}
            />,
        </div>
    )
}