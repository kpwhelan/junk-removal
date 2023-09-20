import { Link, Head } from '@inertiajs/react';
import logo from '../../assets/logo.png';
import trashBag from '../../assets/welcome-page-trash-bag.jpg'

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className='p-2'>
                <section className='mb-10'>
                    <div className='sticky top-0 mt-2 bg-white flex justify-between items-center border-b-4 border-t-4 border-red-500 p-2 mb-2'>
                        <div>
                            <Link href={route('welcome')}>
                                <img src={logo} className='max-h-56'></img>
                            </Link>

                        </div>
                        <div className='flex flex-col text-center mr-16'>
                            <p className='text-lg'>978-877-9784</p>
                            <p>Call Now!</p>
                        </div>
                    </div>


                    <div className="flex flex-row-reverse p-10 rounded-md bg-my-gray bg-[url('/resources/assets/welcome-page-trash-bag.jpg')] bg-center bg-cover">
                        <div className='p-2 bg-my-gray bg-opacity-80 rounded-md text-center'>
                            <p className='text-[3em] text-white'>Get a Free Quote Today!</p>
                            <ul className='text-white text-[1.5em]'>
                                <li>1. Take a picture of your junk</li>
                                <li>2. Text the picture to 978-877-9784</li>
                                <li>3. Receive your free quote!</li>
                            </ul>
                        </div>
                    </div>

                </section>


                <section>
                    <div className='sm:grid gap-4 gap-y-10 grid-cols-2 place-items-center text-white'>
                        <div className='flex items-center justify-between p-3 bg-my-gray w-10/12 h-52 rounded-lg'>
                            <p className='text-[3.5rem]'>Services Offered</p>
                            <ul className='text-lg'>
                                <li>Trash and junk removal</li>
                                <li>Home and Garage cleanouts</li>
                                <li>Furniture disposal</li>
                                <li>Appliance disposal</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-between p-3 bg-my-gray w-10/12 h-52 rounded-lg'>
                            <p className='text-[3.5rem]'>Items We Take</p>
                            <ul className='text-lg'>
                                <li>Trash and junk removal</li>
                                <li>Home and Garage cleanouts</li>
                                <li>Furniture disposal</li>
                                <li>Appliance disposal</li>
                            </ul>
                        </div>


                    </div>
                </section>

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
