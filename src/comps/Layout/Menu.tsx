import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
	const isActive = false;
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	const links = [
		{
			path: '/',
			name: 'Home',
			isActive: false,
			isButton: false,
		},
		{
			path: '/about',
			name: 'About',
			isActive: true, // next router return current slug then test if link.name === route.slug, if empty === home
			isButton: false,
		},
		{
			path: '#',
			name: 'History',
			isActive: false,
			isButton: false,
		},
		{
			path: '#',
			name: 'Philanthropy',
			isActive: false,
			isButton: false,
		},
		{
			path: '#',
			name: 'Contact',
			isActive: false,
			isButton: true,
		},
	];

	return (
		<>
			<button className="block xl:hidden absolute right-0 p-4 space-y-2 bg-gray-600 rounded-full shadow z-10" onClick={toggleMenu}>
				<span className="block w-6 h-0.5 bg-gray-100"></span>
				<span className="block w-6 h-0.5 bg-gray-100"></span>
				<span className="block w-6 h-0.5 bg-gray-100"></span>
			</button>

			<nav
				id="menu"
				className={`fixed bg-[#080e32] w-[100vw] h-[100vh] left-0 top-0 flex items-center justify-center text-center transition duration-400 ease-in-out ${
					isOpen ? '' : '-translate-y-full'
				} xl:relative xl:h-auto xl:w-auto xl:translate-y-0 xl:left-auto xl:top-auto xl:transition-none xl:bg-none`}
			>
				<ul className=" text-white w-full flex flex-col xl:flex-row xl:items-center xl:text-left xl:justify-end">
					{links.map((link, i) => (
						<li key={i} className="xl:ml-14">
							<Link
								href={link.path}
								className={`menu-link block w-full py-8 font-bold transition duration-150 ease-out xl:py-0 hover:text-slate-400${link.isActive ? ' active' : ''}${
									link.isButton
										? ' btn-menu xl:uppercase xl:tracking-widest xl:inline-flex xl:text-black xl:items-center xl:justify-center xl:rounded-full xl:py-4 xl:px-12 xl:text-sm xl:font-semibold xl:bg-white xl:hover:text-slate-900 xl:hover:bg-slate-500 active:bg-slate-400'
										: ''
								}`}
							>
								<span>{link.name}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
