import React from 'react';
import { Svg } from './styles';

interface IIconProps {
	name: string;
	width?: string;
	height?: string;
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

const Icon: React.FC<IIconProps> = ({
	name,
	width,
	height,
	style,
	className
}) => {
	return (
		<Svg
			className={`${className || ''}`}
			style={{
				...(style || {})
			}}
			width={width}
			height={height}
		>
			<use xlinkHref={`#${name}`} width={width} height={height} />
		</Svg>
	);
};

export default Icon;
