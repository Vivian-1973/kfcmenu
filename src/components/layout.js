import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/menu"><a>Menu</a></Link>
                <Link href="/cart"><a>Cart</a></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;
