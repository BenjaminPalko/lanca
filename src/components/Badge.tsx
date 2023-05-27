import {useMemo} from "react";
import {twMerge} from "tailwind-merge";

interface BadgeProps {
    value: string;
    color?: 'red';
}

const Badge = function ({value, color}: BadgeProps) {

    const _color = useMemo(() => {
        switch (color) {
            case "red": {
                return 'bg-white text-red-600';
            }
            default: {
                return ''
            }
        }
    }, [color]);

    return (
        <span
            className={twMerge("whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm bg-purple-100 text-purple-700 antialiased", _color)}>
            {value}
        </span>
    )
}

export default Badge;
