import Link from 'next/link';
import Head from "next/head"

function Home(){
    return (
    <div>
        <Head>
            <title>Home</title>
            <link rel="shortcut icon" type="image/png" href="https://github.com/Gabrielbzl001/ghostk/blob/master/favicon.png?raw=true"/>
        </Head>
        <h1>Home</h1>
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
    </div>

    )
}


export default Home