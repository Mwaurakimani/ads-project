import { Head, Link, usePage } from '@inertiajs/react';
// import { dashboard, login, register } from '@/routes';

export default function Welcome({
    // canRegister = true,
}: {
    canRegister?: boolean;
}) {
    // const { auth } = usePage().props;

    navigator.geolocation.getCurrentPosition((pos) => {
        console.log(`Lat: ${pos.coords.latitude}, Lon: ${pos.coords.longitude}`);
    }, (err) => {
        console.error(`Error: ${err.message}`);
    });

    return (
        <>
            {/*<Head title="Welcome">*/}
            {/*    <link rel="preconnect" href="https://fonts.bunny.net" />*/}
            {/*    <link*/}
            {/*        href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"*/}
            {/*        rel="stylesheet"*/}
            {/*    />*/}
            {/*</Head>*/}
            <p className={'bg-blue-400'}>working</p>
        </>
    );
}
