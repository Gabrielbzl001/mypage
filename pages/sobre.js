import Link from 'next/link';
import Head from "next/head"

function Sobre(){
    return (
    <div>
        <Head>
            <title>Sobre</title>
        </Head>
        <h1>Sobre</h1>
        <Link href="/">
            <a>Acessar página Home</a>
        </Link>
    </div>

    )
}


export default Sobre