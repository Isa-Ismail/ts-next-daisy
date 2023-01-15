import Head from "next/head"
import Navbar from "./Header"
import Footer from "./Footer"

type Props = {
    title?: string;
    children?: JSX.Element;
    description?: string;
};

const Layout = ({ children , title, description }: Props) => {
    return (
        <div>

            <Head>
                <title>{title ? `${title}` : `ICT |BUP`}</title>
                {description && <meta name="description" content={description}></meta>}
                <link rel="icon" href="/img/bup.png" />
            </Head>

            <Navbar />

            <main className="min-h-screen">
                {children}
            </main>

            <Footer />


        </div>
    )
}

export default Layout