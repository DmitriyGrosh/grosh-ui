import React, {FC, PropsWithChildren} from "react";

export const Button: FC<PropsWithChildren> = ({ children }) => <button className="text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700">{children}</button>;
