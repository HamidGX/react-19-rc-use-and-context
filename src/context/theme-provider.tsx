import ThemeContext from './theme-context'

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const theme = {
		primaryColor: 'deepskyblue',
		secondaryColor: 'coral',
	}

	/* @ts-ignore */
	return <ThemeContext value={theme}>{children}</ThemeContext>
}
