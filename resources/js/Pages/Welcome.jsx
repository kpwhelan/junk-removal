import { Link, Head } from '@inertiajs/react';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Components/Footer';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className='p-2 font-ui-monospace'>
                <section className='mb-2'>
                    <div className='sticky top-0 mt-2 bg-white flex flex-col md:flex-row justify-between items-center border-b-4 border-t-4 border-my-sage p-2 mb-2'>
                        <div>
                            <Link href={route('welcome')}>
                                <img src={logo} className='max-h-56'></img>
                            </Link>

                        </div>
                        <div className='flex flex-col text-center md:mr-16'>
                            <a href="tel:9788779784">
                                <p className='text-xl lg:text-2xl'>978-877-9784</p>
                                <p className=' text-2xl'>Call Now!</p>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse p-10 rounded-md bg-my-gray bg-[url('/resources/assets/welcome-page-trash-bag.jpg')] bg-center bg-cover">
                        <div className='p-2 bg-my-sage bg-opacity-50 rounded-md text-center'>
                            <p className='text-[3.5em] text-white'>Get a Free Quote Today!</p>
                            <ul className='text-white text-[1.5em]'>
                                <li>1. Take a picture of your junk</li>
                                <li>2. Text the picture to 978-877-9784</li>
                                <li>3. Receive your free quote!</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='lg:w-[60%] mx-auto flex flex-col lg:flex-row lg:justify-between'>
                        <div className='text-center my-5 lg:w-[50%] mx-auto'>
                            <FontAwesomeIcon icon={faTruck} color='#5f7d54' size='4x' />

                            <div>
                                <p className='text-[2.5rem]'>Services Offered</p>

                                <ul className='text-lg'>
                                    <li>Trash and junk removal</li>
                                    <li>Home and Garage cleanouts</li>
                                    <li>Furniture disposal</li>
                                    <li>Appliance disposal</li>
                                </ul>
                            </div>
                        </div>

                        <div className='text-center my-5 w-[80%] lg:w-[50%] mx-auto'>
                            <FontAwesomeIcon icon={faTrashCan} color='#5f7d54' size='4x'/>

                            <div>
                                <p className='text-[2.5rem]'>Items We Take</p>

                                <div className='flex justify-between'>
                                    <ul className='text-md lg:text-lg'>
                                        <li>Household trash</li>
                                        <li>Appliances</li>
                                        <li>Clothing</li>
                                        <li>Furniture</li>
                                    </ul>

                                    <ul className='text-md lg:text-lg'>
                                        <li>Recreational items</li>
                                        <li>Scrap metal</li>
                                        <li>Used motor oil</li>
                                        <li>Tires</li>
                                    </ul>

                                    <ul className='text-md lg:text-lg'>
                                    <li>Tools</li>
                                        <li>Yard waste</li>
                                        <li className='font-bold'>And more!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='mb-2'>
                    <div className="min-h-fit rounded-lg flex justify-center text-white bg-[url('/resources/assets/junk-pic-1.jpg')] bg-center bg-cover bg-opacity-80">
                        <div className='p-3 text-center bg-my-light-gray max-w-[90%] lg:max-w-[60%] bg-opacity-90'>
                            <p className='text-[4em]'>Why ProHaul?</p>
                            <ul className='text-[1.5em]'>
                                <li className='mb-5'>
                                    ProHaul is a family owned and operated business.
                                </li>
                                <li className='mb-5'>
                                    We offer a hassle-free solution to clutter and waste removal. Customers can schedule pickups at their convenience, saving them time and effort compared to DIY disposal methods.
                                </li>
                                <li className='mb-5'>
                                    We prioritize environmentally responsible disposal practices, recycling and donating items whenever possible. This commitment helps to ensure our waste has as little environmental impact as possible.
                                </li>
                                <li className='mb-5'>
                                    ProHaul's junk removal services are competitively priced, offering great value for the quality of service provided so you can enjoy cost-effective solutions for your clutter and waste removal needs.
                                </li>
                                <li className='mb-5'>
                                    ProHaul prioritizes prompt responses to inquiries and scheduling requests. This ensures that you receive timely assistance when you need it!
                                </li>

                                <li className='mb-5'>
                                    So what are you waiting for? <br/> Let's get rid of your junk today, call or text us at 978-877-9784!
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <Footer />

                    {/* <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div> */}
            </div>
        </>
    );
}
