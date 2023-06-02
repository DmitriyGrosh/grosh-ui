interface IClassName {
	[name: string | number]: boolean | undefined | null;
}

type TClassName = string | undefined | IClassName;
export const toClassName = (...classNames: TClassName[]): string => {
	const classNamesResult: string[] = [];

	classNames.forEach((className) => {
		if (typeof className === 'string') {
			classNamesResult.push(className)
		}

		if (typeof className === 'object') {
			const classNamesArray = Object.entries(className);

			classNamesArray.forEach((classNameObject) => {
				if (!!classNameObject[1]) {
					classNamesResult.push(classNameObject[0]);
				}
			})
		}
	});

	return classNamesResult.join(' ').trim();
};
