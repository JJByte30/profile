/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
interface ButtonProps {
    anterior: string;
    proximo: string;
}

const ButtonNext: React.FC<ButtonProps> = ({
    anterior, proximo
}) => {
    return (
        <div>
            <Link href={anterior}>
                <div className="absolute left-2 top-[40%] -translate-y-1/2 p-4">
                    <img src="/arrowright.svg" alt="" className="invert"/>
                </div>
            </Link>
            <Link href={proximo}>
                <div className="absolute right-2 top-[40%] -translate-y-1/2 p-4">
                    <img src="/arrowleft.svg" alt="" className="invert"/>
                </div>
            </Link>
        </div>
    );
}

export default ButtonNext;