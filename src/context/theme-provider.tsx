import ThemeContext from './theme-context'
import { ThemeProps } from '../lib/types'

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const theme: ThemeProps = {
		primaryColor: 'deepskyblue',
		secondaryColor: 'coral',
	}

	/* @ts-ignore */
	return <ThemeContext value={theme}>{children}</ThemeContext>
}
