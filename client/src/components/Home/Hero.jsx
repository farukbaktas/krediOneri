import { Link } from 'react-router-dom';
function FeaturesBlocks() {
    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-purple-800 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-900 transform translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="text-5xl h2 font-extrabold mb-4 mt-12">Hayatın <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-900">finansal</span> yolculuğunda size rehberlik etmek</h2>
                        <p className="text-xl text-purple-800">Karmaşıklıktan kurtulup kolay Kredi Öneri yardımlarıyla adımlarla finans koçunuz kendiniz olun.</p>
                    </div>
                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-center md:max-w-2xl lg:max-w-none">

                        {/* 1st item */}
                        <Link to='/ihtiyac-kredisi' className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:text-purple-800 border-2 hover:border-purple-600">
                            <svg className="w-16 h-16 p-1 -mt-1 mb-2 text-purple-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                            </svg>

                            <h4 className="text-xl font-bold leading-snug tracking-tight my-2">İhtiyaç Kredisi</h4>
                        </Link>

                        {/* 2nd item */}
                        <Link to='/konut-kredisi' className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:text-purple-800 border-2 hover:border-purple-600">
                            <svg className="w-16 h-16 p-1 -mt-1 mb-2 text-purple-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight my-2">Kredi Kartı</h4>
                        </Link>




                        {/* 4th item */}
                        <Link to='/tasit-kredisi' className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:text-purple-800 border-2 hover:border-purple-600">
                            <svg className="w-16 h-16 p-1 -mt-1 mb-2 text-purple-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>

                            <h4 className="text-xl font-bold leading-snug tracking-tight my-2">Taşıt Kredisi</h4>
                        </Link>
                    </div>
                    <div className="mt-40"></div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesBlocks;