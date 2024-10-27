// @ts-expect-error Missing type declaration for 'use'.
import { use } from 'react' // This error is expected because the "react" module does not have an exported member called 'use'.

import ThemeContext from '../context/theme-context.tsx'

export default function Heading({ children }: { children: React.ReactNode }) {
	if (children == null) {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					textAlign: 'center',
				}}
			>
				<h1>Default Heading</h1>
			</div>
		)
	}

	const theme = use(ThemeContext)
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				textAlign: 'center',
			}}
		>
			<h1 style={{ color: theme.primaryColor }}>{children}</h1>
		</div>
	)
}
