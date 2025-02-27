import { Clock, Shield, Users } from "lucide-react";

function Service() {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%"
            }} className="pt-24 pb-12 pxS-4 sm:px-5 lg:px-8 bg-gradient-to-br from-rose-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div style={{ position: "relative", height: "400px" }} className="grid md:grid-cols-2 gap-12 items-center">
                        <div style={{ position: 'relative', zIndex: "9" }} className='pl-4'>
                            <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 leading-tight">
                              Our Sevices
                            </h1>
                            <p style={{ textShadow: "0 0 white" }} className="mt-8 text-lg text-gray-900">
                                Providing compassionate and reliable home health care services to help maintain independence and quality of life.
                            </p>
                            {/* <Link
                                to="/contact"
                                className="mt-8 bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors inline-flex items-center"
                            >
                                Contact Us
                            </Link> */}
                        </div>
                        <div style={{ width: "100%", position: "absolute", height: "100%", left: "0" }}>
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
                                alt="Caring nurse with patient"
                                className="rounded-lg shadow-lg image-hover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 pr-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-red-900 mb-12">Our Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <Clock className="h-12 w-12 text-rose-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">24/7 Care</h3>
                            <p className="text-gray-600">Round-the-clock support and assistance for your loved ones.</p>
                           
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <Shield className="h-12 w-12 text-rose-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Personal Care</h3>
                            <ul>
                                <li>Personal Hygiene Assistance</li>
                                <li>Grooming/Oral Care</li>
                                <li>Meal plan/ Preparation</li>
                                <li>Bathing dressing Grooming</li>
                                <li>Medical reminder</li>
                                <li>Transferring Assistance</li>
                                <li>Exercise / Walking Assist</li>
                                <li>Incontinence care</li>
                                <li>Home Safety</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <Shield className="h-12 w-12 text-rose-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Personal Assistance Service</h3>
                            <ul>
                                <li>PGrocery Shopping</li>
                                <li>Run errands </li>
                                <li>Coordinate Schedule</li>
                                <li>Scrap booking</li>
                                <li>Assist with travel Arrangements</li>
                                <li>Water Houseplants / Pet Care</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <Users className="h-12 w-12 text-rose-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Skilled Nursing</h3>
                            <p className="text-gray-600">Professional medical care from licensed nurses.</p>
                        </div> 
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <Users className="h-12 w-12 text-rose-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2"> HouseKeeping Services</h3>
                            <ul>
                                <li>Sanitize</li>
                                <li>Mop/Vacuum Floors</li>
                                <li>Dust Furniture</li>
                                <li>Wash/Dry Dishes</li>
                                <li>Laundry</li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Service;