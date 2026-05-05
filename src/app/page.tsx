import type {Route} from "next";
import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <h2 className='text-lg'>Home Page</h2>
            <Link href={'/tickets/' as Route}></Link>
        </div>
    )

}

export default HomePage;