import React, {ButtonHTMLAttributes, FC} from "react";
import {toClassName} from "../../lib/toClassName";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button: FC<IButton> = ({ children, className, ...rest }) => {
	const cs = toClassName(className, {'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700': true})

	return <button {...rest} className={cs}>{children}</button>;
};
