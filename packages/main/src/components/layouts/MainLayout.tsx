import { Outlet } from 'react-router-dom'
import Tabs from '../tabs'

/**
 * Main layout for authenticated pages
 * Includes the common navigation tabs at the bottom
 */
function MainLayout() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Main content area */}
			<div className="flex-1 pb-60px">
				<Outlet />
			</div>

			{/* Bottom navigation */}
			<Tabs />
		</div>
	)
}

export default MainLayout
