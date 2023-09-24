'use client'

import { Link } from '@chakra-ui/next-js'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Heading, Box, Button, Text } from '@chakra-ui/react'
import Header from './components/header'

export default function Home() {

	/*
	const a = 1;
	const b = 2;

	for (let i = 0; i < 3; i++){
		console.log("i = " + i);
	  }

	console.log("end");

    <Header title={`おもしろい数学の世界`}></Header>
    */


	return(
		<Box background="white">
			<center>
	     		<Heading className="mytitle" fontWeight='bold' style={{color: 'red'}} fontSize={28}>
					こんなに面白い！<br/>
					数学の世界<br/><br/>
				</Heading>

				<Text fontSize={24}>問題<br/></Text>

				<Text fontSize={20}>
					84872 + 84872 =<br/><br/>
				</Text>

				<Link href="/layer1" px={8} py={3} bg="cyan" color="black" fontSize={24}>
					答え合わせ
				</Link>
			</center>	
		</Box>
	);

}

// <Link href={`/layer1`}><button>答えはここをクリック！</button></Link>