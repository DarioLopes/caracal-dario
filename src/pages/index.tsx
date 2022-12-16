import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import Header from '../comps/Layout/Header';
Header;

const Page: NextPage = () => {
	const plyrProps = {
		type: 'video',
		title: "Awesome video that doesn't play <3",
		sources: [
			// https://github.com/sampotts/plyr#the-source-setter
			{
				src: '/video/earth.mp4',
				type: 'video/mp4',
				size: 480,
			},
		],
		options: 'playsinline controls', // https://github.com/sampotts/plyr#options
		// Direct props for inner video tag (mdn.io/video)
	};

	return (
		<div>
			<Head>
				<title>Beherman Group</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header showMenu={false} />

			<Container>
				<Col colStart={[2, 3]} colEnd={[25, null, 18, null, 22]}>
					<h1 className="title text-4xl lg:text-6xl text-white uppercase pt-6 md:pt-14">
						<span>A winning</span>
						<br />
						<span>Partnership to come</span>
					</h1>
				</Col>
			</Container>

			<Container>
				<Col className="pt-9 md:pt-14" colStart={[1, 5, null, null, null]} colEnd={[27, 22, null, null, null]}>
					<Plyr {...plyrProps} />
				</Col>
			</Container>

			<Container>
				<Col className="pt-9 sm:pt-14" colStart={[3, 5, null, null, null]} colEnd={[27, 22, null, null, null]}>
					<div className="cta-email text-white p-5 xl:p-0 justify-center h-28 flex flex-col lg:flex-row lg:items-center">
						<span className="text-2xl mb-4 lg:mb-0">Want to go further?</span>
						<span className="arrow-container px-10">
							<span className="arrow"></span>
						</span>
						<a
							href="mailto:jacques.beherman@beberman.com"
							className="text-black font-w bg-blue-300 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center"
						>
							<span>jacques.beherman@beberman.com</span>
						</a>
					</div>
				</Col>
			</Container>

			<footer className="mt-8 md:mt-32 py-10">
				<Container className="text-white flex-row-reverse order-1">
					<Col className="mb-4 lg:mb-0 order-3 lg:order-1" colStart={[2]} colEnd={[26, null, null, 7]}>
						<div className="flex items-center justify-start">
							<Link href={'/'}>
								<Image src={'/img/logo-beherman-group.svg'} alt={'Beherman Group'} width={165} height={20} />
							</Link>
						</div>
					</Col>

					<Col className="infos tracking-widest text-sm font-bold mb-4 order-2 lg:order-2 lg:mb-0" colStart={[2, null, null, 7]} colEnd={[26, null, null, 13]}>
						<div className="block mb-2">
							<a href="tel:+3238909111" className="flex flex-row">
								<Image src={'/img/phone.svg'} alt={'Phone Beherman Group'} width={15} height={15} />
								<span>+32 (0)3 890 91 11</span>
							</a>
						</div>

						<div>
							<a href="tel:+3238909118" className="flex flex-row">
								<Image src={'/img/printer.svg'} alt={'Fax Beherman Group'} width={15} height={15} />
								<span>+32 (0)3 890 91 18</span>
							</a>
						</div>
					</Col>

					<Col className="infos tracking-widest text-sm font-bold mb-4 -order-1 lg:mb-0 lg:order-3" colStart={[2, null, null, 13]} colEnd={[26, null, null, 20]}>
						<address className="uppercase flex flex-row items-start">
							<Image src={'/img/map-pin.svg'} alt={'Address Beherman Group'} className="mt-[3px]" width={15} height={15} />
							<span>
								<span className="block mb-2">Industrieweg, 3</span>
								<span>2880 Bornem Belgium</span>
							</span>
						</address>
					</Col>

					<Col className="copyright flex items-center justify-start p-2 order-4 lg:order-4" colStart={[2, null, null, 20]} colEnd={[26]}>
						<span>© 2022 Beherman Group. All rights reserved.</span>
					</Col>
				</Container>
			</footer>
		</div>
	);
};

export default Page;
