import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Col from './Col';
import Container from './Container';
import Menu from './Menu';

export default function Header(props) {
	return (
		<div className="h-24 bg-[#080e32]/50">
			<header className={'py-7 fixed w-full'}>
				<Container>
					<Col colStart={[1, 2]} colEnd={[26, 13]}>
						<Link href="/" className="logo flex items-center">
							<Image src={'/img/logo-beherman-group.svg'} alt={'Beherman Group'} width={210} height={25} />
						</Link>
					</Col>
					{props.showMenu ? (
						<Col className="relative" colStart={[1, 13]} colEnd={[26, 26]}>
							<Menu />
						</Col>
					) : (
						''
					)}
				</Container>
			</header>
		</div>
	);
}
