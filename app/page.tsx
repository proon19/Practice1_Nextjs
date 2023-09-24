import Link from 'next/link'
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
		<>
      		<h1 className="mytitle" style={{color: 'red'}}>おもしろい数学の世界</h1>
			<p>84872+84872=</p>
			<Link href={`/layer1`}><button>答えはここをクリック！</button></Link>
		</>
	);

}