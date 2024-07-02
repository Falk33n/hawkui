import {
	Accounts,
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/hawkUI';

export default function Home() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Accounts />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
