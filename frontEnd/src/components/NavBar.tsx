import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Page } from '@/components/Page'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const links = [
  { to: '/', label: 'Home' },
  { to: '/profile', label: 'Profile' },
  { to: '/sports-cv', label: 'Sports CV' },
  { to: '/professional-cv', label: 'Professional CV' },
]

export function NavBar() {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Page as="div" className="flex items-center py-2">
        <NavigationMenu>
          <NavigationMenuList>
            {links.map(({ to, label }) => {
              const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to)
              return (
                <NavigationMenuItem key={to}>
                  <NavigationMenuLink
                    render={<Link to={to} />}
                    active={isActive}
                    className={cn(navigationMenuTriggerStyle())}
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </Page>
    </header>
  )
}
