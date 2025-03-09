import { useLocation, Link } from 'react-router-dom'

const TabItem = ({ href, icon }: { href: string; icon: string }) => {
	const location = useLocation()
	const isActive = location.pathname === href

	return (
		<Link
			to={href}
			className={`w-full h-60px sticky bottom-0 flex items-center justify-center transition-all duration-200 relative overflow-hidden active:scale-95`}
		>
			<div
				className={`${icon} w-30px h-30px ${isActive ? 'text-cyan-500' : 'text-white'} transition-colors duration-200`}
			/>
			<div className="absolute w-full h-full top-0 left-0 pointer-events-none overflow-hidden">
				<span className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-cyan-500/20 transform transition-all duration-300 ease-out active:w-full active:h-full active:opacity-0" />
			</div>
		</Link>
	)
}

function Tabs() {
	return (
		<div className="w-full h-60px sticky bottom-0 flex items-center justify-between">
			<TabItem href="/" icon="i-fluent-checkbox-checked-16-filled" />
			<TabItem href="/calendar" icon="i-fluent-calendar-date-20-filled" />
			<TabItem href="/tomato" icon="i-fluent-timer-20-filled" />
			<TabItem href="/settings" icon="i-fluent-settings-16-filled" />
		</div>
	)
}

export default Tabs
