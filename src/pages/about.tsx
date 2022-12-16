import type { NextPage } from 'next';
import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import Head from 'next/head';
import Header from '../comps/Layout/Header';
import Title from '../comps/Layout/Title';

const About: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Beherman Group | About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header showMenu={true} />

			<Container>
				<Col colStart={[3]} colEnd={[26]}>
					<Title>
						Nearly a century
						<br /> driven by a passion
						<br /> for excellence
					</Title>
				</Col>
			</Container>
		</div>
	);
};

export default About;
