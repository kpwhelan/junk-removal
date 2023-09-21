import { Link } from "@inertiajs/react";
import logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <footer>
            <div className='flex justify-between items-center border-b-4 border-t-4 border-my-sage md:p-2 mb-2'>
                <div>
                    <Link href={route('welcome')}>
                        <img src={logo} className='max-h-16'></img>
                    </Link>
                </div>
                <p>&copy; TNSG Web Services</p>
                <div className='flex flex-col text-center mr-8'>
                    <p className='text-sm md:text-2xl'><a href="tel:9788779784">978-877-9784</a></p>
                </div>
            </div>
        </footer>
    )
}
