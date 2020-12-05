import Link from 'next/link';
import Head from "next/head"

function Home(){
    return (
    <div>
        <Head>
            <title>Home</title>
        </Head>
        <h1>Home</h1>
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
    </div>

    )
}


export default Home