import Heading from './components/heading'
import ThemeProvider from './context/theme-provider'

export default function App() {
	return (
		<ThemeProvider>
			<Heading>Hello World Props</Heading>
		</ThemeProvider>
	)
}
