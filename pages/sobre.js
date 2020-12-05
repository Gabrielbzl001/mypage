import Link from 'next/link';
import Head from "next/head"


function Sobre(){
    return (
    <div>
        <Head>
            <title>Sobre</title>
            <link rel="shortcut icon" href="../images/icons/favicon.ico" />
        </Head>
        <h1>Sobre 2</h1>
        <Link href="/">
            <a>Acessar página Home</a>
        </Link>
    </div>

    )
}


export default Sobre