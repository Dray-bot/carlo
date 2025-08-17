// // app/listings/page.js
// "use client";

// import { useState, useMemo, useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// const allCars = {
//   BMW: [
//     { model: "X5", price: 60000, img: "https://media.ed.edmunds-media.com/bmw/x5/2026/oem/2026_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_1280.jpg", badge: "Featured" },
//     { model: "M3", price: 70000, img: "https://cdn.motor1.com/images/mgl/1ZQrxK/s1/2023-bmw-m3-cs-first-drive-review.webp" },
//     { model: "M5 Competition", price: 140000, img: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fbmw%2Fm5%2Fbmw-m5.jpg%3Fv%3D13&w=3840&q=75" },
//   ],
//   Audi: [
//     { model: "A6", price: 55000, img: "https://resource.digitaldealer.com.au/image/196221260366eb3f334aeb5825673000_900_600-c.jpg" },
//     { model: "Q7", price: 65000, img: "https://hips.hearstapps.com/hmg-prod/images/0k2a4815-66b29b3088101.jpg?crop=1.00xw:0.848xh;0,0.121xh&resize=980:*" },
//     { model: "RS7", price: 120000, img: "https://www.cnet.com/a/img/resize/e8c8dd2963e629687fbcfe8d68ce37804114da62/hub/2020/11/06/fe337281-ae20-4ad4-997b-95c2937b9258/ogi1-2021-audi-rs7-008.jpg?auto=webp&fit=crop&height=675&width=1200" },
//   ],
//   Mercedes: [
//     { model: "C-Class", price: 50000, img: "https://upload.wikimedia.org/wikipedia/commons/b/be/Mercedes-Benz_W206_IMG_6380.jpg" },
//     { model: "E-Class", price: 65000, img: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/e-class/e-sedan/byo-options/2025-E-SEDAN-MP-017.jpg" },
//     { model: "S-Class", price: 110000, img: "https://media.ed.edmunds-media.com/mercedes-benz/s-class/2025/oem/2025_mercedes-benz_s-class_sedan_amg-s-63-e-performance_fq_oem_1_1600.jpg" },
//   ],
//   Tesla: [
//     { model: "Model 3", price: 45000, img: "https://www.shop4tesla.com/cdn/shop/articles/lohnt-sich-ein-gebrauchtes-tesla-model-3-vor-und-nachteile-833053.jpg?v=1733570691" },
//     { model: "Model X", price: 80000, img: "https://www.vcentrum.pl/wp-content/uploads/2023/03/DSC07487.jpg" },
//     { model: "Model S", price: 90000, img: "https://images.prismic.io/carwow/a0b54c70-b58c-482c-8d28-b72884380e42_2023+Tesla+Model+S+front+quarter+static.jpg?auto=format&cs=tinysrgb&fit=max&q=60" },
//   ],
//   Porsche: [
//     { model: "911", price: 120000, img: "https://media.ed.edmunds-media.com/porsche/911/2025/oem/2025_porsche_911_coupe_carrera-4-gts_fq_oem_1_1280.jpg" },
//     { model: "Cayenne", price: 85000, img: "https://hips.hearstapps.com/hmg-prod/images/2025-porsche-cayenne-gts-160-68504e3083082.jpg?crop=0.792xw:0.668xh;0.112xw,0.204xh&resize=2048:*" },
//     { model: "Taycan", price: 100000, img: "https://www.digitaltrends.com/wp-content/uploads/2024/12/DSC_0732.jpeg?p=1" },
//   ],
//   Toyota: [
//     { model: "Camry", price: 30000, img: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.676xw:0.506xh;0.101xw,0.399xh&resize=1200:*" },
//     { model: "Corolla", price: 25000, img: "https://cdn.sanity.io/images/90qxor39/production/d727bb2e9d8a075a43772a0080e0344a2aa72f04-800x450.jpg?w=800&h=450&q=75&fit=max&auto=format" },
//     { model: "Highlander", price: 55000, img: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-highlander-102-66e97932a6f77.jpg?crop=0.811xw:0.608xh;0.101xw,0.290xh&resize=1200:*" },
//     { model: "Land Cruiser", price: 85000, img: "https://www.edmunds.com/assets/m/cs/blt61608ee292d17e86/6699a39a77a780702544be85/2024-toyota-land-cruiser-f34.jpg" },
//   ],
//   Lexus: [
//     { model: "RX", price: 45000, img: "https://media.ed.edmunds-media.com/lexus/rx/2025/oem/2025_lexus_rx_4dr-suv_350-f-sport-handling_fq_oem_1_1280.jpg" },
//     { model: "NX", price: 40000, img: "https://media.ed.edmunds-media.com/lexus/nx/2025/oem/2025_lexus_nx_4dr-suv_250-premium_fq_oem_1_600.jpg" },
//     { model: "LC 500", price: 95000, img: "https://global.toyota/pages/news/images/2019/11/20/1100/001.jpg" },
//   ],
//   Honda: [
//     { model: "Civic", price: 25000, img: "https://www.autoblog.com/.image/w_3840,q_auto:good,c_fill,ar_4:3/MjA5MDg4ODIyMjQxMjA3OTIw/honda-civic-sport-touring.jpg" },
//     { model: "Accord", price: 30000, img: "https://www.cnet.com/a/img/resize/bfa75d75231dc8d14857ab41ed58c7fed7c75236/hub/2021/01/07/a9cb3648-5bc3-49ed-8bad-4c88b231a4ec/2021-honda-accord-008.jpg?auto=webp&fit=crop&height=900&width=1200" },
//     { model: "CR-V", price: 35000, img: "https://cdn.arstechnica.net/wp-content/uploads/2023/05/2023-Honda-CR-V-Hybrid-1-scaled.jpg" },
//   ],
//   Nissan: [
//     { model: "Altima", price: 28000, img: "https://di-uploads-pod27.dealerinspire.com/cbsqualitycars/uploads/2020/11/Used-Nissan-Altima-2015-Nissan-Altima-front.jpg" },
//     { model: "X-Trail", price: 35000, img: "https://kingbode.com/wp-content/uploads/2024/08/2024-Nissan-X-Trail-E-POWER-4WD-Deluxe-01.jpg" },
//     { model: "GT-R", price: 120000, img: "https://www.cnet.com/a/img/resize/7aa682e6ae15b815d8891dea87712b540b50960e/hub/2018/07/02/55eaef81-1834-41e8-a1f8-a2b8561ab3ef/001-2018-nissan-gtr-review.jpg?auto=webp&fit=crop&height=675&width=1200" },
//   ],
//   Kia: [
//     { model: "Sportage", price: 32000, img: "https://www.kia.com/content/dam/kia/us/en/vehicles/sportage/2026/mep/in-page-gallery/my26-sportage-ice-mep-gallery-1.jpg" },
//     { model: "Sorento", price: 40000, img: "https://www.edmunds.com/assets/m/cs/blt98aa53c5d0c153b0/674f4da385394b2ab32be7d1/2025-kia-sorento-hybrid-f34.jpg" },
//     { model: "Stinger", price: 55000, img: "https://www.just-auto.com/wp-content/uploads/sites/30/2021/07/Kia-Stinger.jpg" },
//   ],
//   Hyundai: [
//     { model: "Elantra", price: 25000, img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/0_Hyundai_Avante_%28CN7%29_FL_2.jpg" },
//     { model: "Tucson", price: 35000, img: "https://www.carpro.com/hubfs/2025-hyundai-tucson-hero-ap.jpg" },
//     { model: "Santa Fe", price: 45000, img: "https://hips.hearstapps.com/hmg-prod/images/2021-hyundai-santa-fe-mmp-1-1617287216.jpg" },
//   ],
//   Jeep: [
//     { model: "Wrangler", price: 55000, img: "https://autoimage.capitalone.com/cms/Auto/assets/images/1485-hero-2022-jeep-wrangler-review-and-test-drive.jpg" },
//     { model: "Grand Cherokee", price: 65000, img: "https://images.cars.com/cldstatic/wp-content/uploads/jeep-grand-cherokee-trailhawk-4xe-2023-03-exterior-front-angle-electric.jpg" },
//   ],
//   Volkswagen: [
//     { model: "Golf", price: 23000, img: "https://media.ed.edmunds-media.com/volkswagen/golf-gti/2025/oem/2025_volkswagen_golf-gti_4dr-hatchback_autobahn_fq_oem_1_1600.jpg" },
//     { model: "Passat", price: 28000, img: "https://hips.hearstapps.com/hmg-prod/images/db2023au00887-large-64f0a2e1c7d58.jpg" },
//     { model: "Tiguan", price: 35000, img: "https://www.vwmankato.com/blogs/1677/wp-content/uploads/2024/06/14971-2022Tiguan-1024x683.jpg" },
//   ],
// };

// const brandLogos = {
//   BMW: "https://download.logo.wine/logo/BMW_in_the_United_States/BMW_in_the_United_States-Logo.wine.png",
//   Audi: "https://1000logos.net/wp-content/uploads/2018/05/Emblem-Audi.png",
//   Mercedes: "https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png",
//   Tesla: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg",
//   Porsche: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqf-xL-_zdHXvumpxNjbsJp_0eQyTWExmgZQ&s",
//   Toyota: "https://cdn.freelogovectors.net/wp-content/uploads/2018/04/toyotalogo1.png",
//   Lexus: "https://e7.pngegg.com/pngimages/620/329/png-clipart-lexus-logo-lexus-rx-toyota-car-lexus-is-car-logo-angle-emblem.png",
//   Honda: "https://img.favpng.com/21/9/16/honda-logo-honda-civic-type-r-car-honda-cr-v-png-favpng-iSH9M91vrSjYj3D49UmkyqpJw.jpg",
//   Nissan: "https://icon2.cleanpng.com/ci4/eal/cgc/ag0u328yu.webp",
//   Kia: "https://www.citypng.com/public/uploads/preview/kia-black-logo-png-701751694710513ncx96yu8gs.png",
//   Hyundai: "https://www.citypng.com/public/uploads/preview/hyundai-emblem-logo-transparent-background-701751694714000eobbvi2xdc.png",
//   Jeep: "https://www.citypng.com/public/uploads/preview/jeep-black-logo-hd-png-701751694772047eevkbcxy7d.png",
//   Volkswagen: "https://icon2.cleanpng.com/20181123/op/kisspng-volkswagen-group-car-volkswagen-jetta-logo-car-logo-volkswagen-2-2-83-kb-latest-version-1713918995848.webp",
// };

// export default function ListingsPage() {
//   const [selectedBrand, setSelectedBrand] = useState("All");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const containerRef = useRef(null);

//   const filteredBrands =
//     selectedBrand === "All" ? Object.keys(allCars) : [selectedBrand];

//   const sortedCars = useMemo(() => {
//     const copy = {};
//     filteredBrands.forEach((brand) => {
//       copy[brand] = [...allCars[brand]].sort((a, b) =>
//         sortOrder === "asc" ? a.price - b.price : b.price - a.price
//       );
//     });
//     return copy;
//   }, [filteredBrands, sortOrder]);

//   const handleDragEnd = (e, info) => {
//     const container = containerRef.current;
//     if (!container) return;
//     const children = Array.from(container.children);
//     const scrollLeft = container.scrollLeft;
//     let closest = children[0];
//     let minDiff = Math.abs(children[0].offsetLeft - scrollLeft);
//     children.forEach((child) => {
//       const diff = Math.abs(child.offsetLeft - scrollLeft);
//       if (diff < minDiff) {
//         minDiff = diff;
//         closest = child;
//       }
//     });
//     container.scrollTo({ left: closest.offsetLeft, behavior: "smooth" });
//   };

//   return (
//     <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
//       <motion.h1
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="text-4xl font-bold text-gray-800 mb-4 text-center"
//       >
//         Carlo Listings
//       </motion.h1>
//       <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
//         Browse all available cars from verified sellers. Filter by brand and price to find your perfect ride.
//       </p>

//       <motion.div
//         ref={containerRef}
//         className="flex space-x-4 overflow-x-scroll scrollbar-hide mb-8 py-2 px-2 cursor-grab"
//         drag="x"
//         dragConstraints={{ left: -1000, right: 0 }}
//         onDragEnd={handleDragEnd}
//         whileTap={{ cursor: "grabbing" }}
//       >
//         <motion.button
//           onClick={() => setSelectedBrand("All")}
//           className={`flex-shrink-0 px-4 py-2 rounded-full border ${
//             selectedBrand === "All"
//               ? "bg-blue-600 text-white"
//               : "bg-white text-gray-800 border-gray-300"
//           } transition`}
//         >
//           All
//         </motion.button>
//         {Object.keys(brandLogos).map((brand) => (
//           <motion.button
//             key={brand}
//             onClick={() => setSelectedBrand(brand)}
//             className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full border ${
//               selectedBrand === brand
//                 ? "bg-blue-600 text-white"
//                 : "bg-white text-gray-800 border-gray-300"
//             } transition`}
//           >
//             <img src={brandLogos[brand]} alt={brand} className="w-6 h-6 object-contain" />
//             <span className="hidden sm:inline">{brand}</span>
//           </motion.button>
//         ))}
//       </motion.div>

//       <div className="flex justify-center mb-12">
//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           className="px-4 py-2 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
//         >
//           <option value="asc">Price: Low to High</option>
//           <option value="desc">Price: High to Low</option>
//         </select>
//       </div>

//       {filteredBrands.map((brand, idx) => (
//         <section key={brand} className="mb-12">
//           <motion.h2
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: idx * 0.1 }}
//             className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
//           >
//             {brand}
//           </motion.h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sortedCars[brand].map((car, i) => (
//               <motion.div
//                 key={i}
//                 className="relative bg-white p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
//                 whileHover={{ scale: 1.03 }}
//               >
//                 {car.badge && (
//                   <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
//                     {car.badge}
//                   </span>
//                 )}
//                 <img
//                   src={car.img}
//                   alt={car.model}
//                   className="w-full h-48 object-cover rounded-md mb-4"
//                 />
//                 <h3 className="text-lg font-semibold text-gray-800">{car.model}</h3>
//                 <p className="text-gray-600 mt-1">${car.price.toLocaleString()}</p>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition duration-300">
//                   <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-700">
//                     View
//                   </button>
//                   <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-200">
//                     Contact Seller
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       ))}
//     </main>
//   );
// }



// app/listings/page.js
"use client";

import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const allCars = {
  BMW: [
    { model: "X5", price: 60000, img: "https://media.ed.edmunds-media.com/bmw/x5/2026/oem/2026_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_1280.jpg", badge: "Featured" },
    { model: "M3", price: 70000, img: "https://cdn.motor1.com/images/mgl/1ZQrxK/s1/2023-bmw-m3-cs-first-drive-review.webp" },
    { model: "M5 Competition", price: 140000, img: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fbmw%2Fm5%2Fbmw-m5.jpg%3Fv%3D13&w=3840&q=75" },
  ],
  Audi: [
    { model: "A6", price: 55000, img: "https://resource.digitaldealer.com.au/image/196221260366eb3f334aeb5825673000_900_600-c.jpg" },
    { model: "Q7", price: 65000, img: "https://hips.hearstapps.com/hmg-prod/images/0k2a4815-66b29b3088101.jpg?crop=1.00xw:0.848xh;0,0.121xh&resize=980:*" },
    { model: "RS7", price: 120000, img: "https://www.cnet.com/a/img/resize/e8c8dd2963e629687fbcfe8d68ce37804114da62/hub/2020/11/06/fe337281-ae20-4ad4-997b-95c2937b9258/ogi1-2021-audi-rs7-008.jpg?auto=webp&fit=crop&height=675&width=1200" },
  ],
  Mercedes: [
    { model: "C-Class", price: 50000, img: "https://upload.wikimedia.org/wikipedia/commons/b/be/Mercedes-Benz_W206_IMG_6380.jpg" },
    { model: "E-Class", price: 65000, img: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/e-class/e-sedan/byo-options/2025-E-SEDAN-MP-017.jpg" },
    { model: "S-Class", price: 110000, img: "https://media.ed.edmunds-media.com/mercedes-benz/s-class/2025/oem/2025_mercedes-benz_s-class_sedan_amg-s-63-e-performance_fq_oem_1_1600.jpg" },
  ],
  Tesla: [
    { model: "Model 3", price: 45000, img: "https://www.shop4tesla.com/cdn/shop/articles/lohnt-sich-ein-gebrauchtes-tesla-model-3-vor-und-nachteile-833053.jpg?v=1733570691" },
    { model: "Model X", price: 80000, img: "https://www.vcentrum.pl/wp-content/uploads/2023/03/DSC07487.jpg" },
    { model: "Model S", price: 90000, img: "https://images.prismic.io/carwow/a0b54c70-b58c-482c-8d28-b72884380e42_2023+Tesla+Model+S+front+quarter+static.jpg?auto=format&cs=tinysrgb&fit=max&q=60" },
  ],
  Porsche: [
    { model: "911", price: 120000, img: "https://media.ed.edmunds-media.com/porsche/911/2025/oem/2025_porsche_911_coupe_carrera-4-gts_fq_oem_1_1280.jpg" },
    { model: "Cayenne", price: 85000, img: "https://hips.hearstapps.com/hmg-prod/images/2025-porsche-cayenne-gts-160-68504e3083082.jpg?crop=0.792xw:0.668xh;0.112xw,0.204xh&resize=2048:*" },
    { model: "Taycan", price: 100000, img: "https://www.digitaltrends.com/wp-content/uploads/2024/12/DSC_0732.jpeg?p=1" },
  ],
  Toyota: [
    { model: "Camry", price: 30000, img: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.676xw:0.506xh;0.101xw,0.399xh&resize=1200:*" },
    { model: "Corolla", price: 25000, img: "https://cdn.sanity.io/images/90qxor39/production/d727bb2e9d8a075a43772a0080e0344a2aa72f04-800x450.jpg?w=800&h=450&q=75&fit=max&auto=format" },
    { model: "Highlander", price: 55000, img: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-highlander-102-66e97932a6f77.jpg?crop=0.811xw:0.608xh;0.101xw,0.290xh&resize=1200:*" },
    { model: "Land Cruiser", price: 85000, img: "https://www.edmunds.com/assets/m/cs/blt61608ee292d17e86/6699a39a77a780702544be85/2024-toyota-land-cruiser-f34.jpg" },
  ],
  Lexus: [
    { model: "RX", price: 45000, img: "https://media.ed.edmunds-media.com/lexus/rx/2025/oem/2025_lexus_rx_4dr-suv_350-f-sport-handling_fq_oem_1_1280.jpg" },
    { model: "NX", price: 40000, img: "https://media.ed.edmunds-media.com/lexus/nx/2025/oem/2025_lexus_nx_4dr-suv_250-premium_fq_oem_1_600.jpg" },
    { model: "LC 500", price: 95000, img: "https://global.toyota/pages/news/images/2019/11/20/1100/001.jpg" },
  ],
  Honda: [
    { model: "Civic", price: 25000, img: "https://www.autoblog.com/.image/w_3840,q_auto:good,c_fill,ar_4:3/MjA5MDg4ODIyMjQxMjA3OTIw/honda-civic-sport-touring.jpg" },
    { model: "Accord", price: 30000, img: "https://www.cnet.com/a/img/resize/bfa75d75231dc8d14857ab41ed58c7fed7c75236/hub/2021/01/07/a9cb3648-5bc3-49ed-8bad-4c88b231a4ec/2021-honda-accord-008.jpg?auto=webp&fit=crop&height=900&width=1200" },
    { model: "CR-V", price: 35000, img: "https://cdn.arstechnica.net/wp-content/uploads/2023/05/2023-Honda-CR-V-Hybrid-1-scaled.jpg" },
  ],
  Nissan: [
    { model: "Altima", price: 28000, img: "https://di-uploads-pod27.dealerinspire.com/cbsqualitycars/uploads/2020/11/Used-Nissan-Altima-2015-Nissan-Altima-front.jpg" },
    { model: "X-Trail", price: 35000, img: "https://kingbode.com/wp-content/uploads/2024/08/2024-Nissan-X-Trail-E-POWER-4WD-Deluxe-01.jpg" },
    { model: "GT-R", price: 120000, img: "https://www.cnet.com/a/img/resize/7aa682e6ae15b815d8891dea87712b540b50960e/hub/2018/07/02/55eaef81-1834-41e8-a1f8-a2b8561ab3ef/001-2018-nissan-gtr-review.jpg?auto=webp&fit=crop&height=675&width=1200" },
  ],
  Kia: [
    { model: "Sportage", price: 32000, img: "https://www.kia.com/content/dam/kia/us/en/vehicles/sportage/2026/mep/in-page-gallery/my26-sportage-ice-mep-gallery-1.jpg" },
    { model: "Sorento", price: 40000, img: "https://www.edmunds.com/assets/m/cs/blt98aa53c5d0c153b0/674f4da385394b2ab32be7d1/2025-kia-sorento-hybrid-f34.jpg" },
    { model: "Stinger", price: 55000, img: "https://www.just-auto.com/wp-content/uploads/sites/30/2021/07/Kia-Stinger.jpg" },
  ],
  Hyundai: [
    { model: "Elantra", price: 25000, img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/0_Hyundai_Avante_%28CN7%29_FL_2.jpg" },
    { model: "Tucson", price: 35000, img: "https://www.carpro.com/hubfs/2025-hyundai-tucson-hero-ap.jpg" },
    { model: "Santa Fe", price: 45000, img: "https://hips.hearstapps.com/hmg-prod/images/2021-hyundai-santa-fe-mmp-1-1617287216.jpg" },
  ],
  Jeep: [
    { model: "Wrangler", price: 55000, img: "https://autoimage.capitalone.com/cms/Auto/assets/images/1485-hero-2022-jeep-wrangler-review-and-test-drive.jpg" },
    { model: "Grand Cherokee", price: 65000, img: "https://images.cars.com/cldstatic/wp-content/uploads/jeep-grand-cherokee-trailhawk-4xe-2023-03-exterior-front-angle-electric.jpg" },
  ],
  Volkswagen: [
    { model: "Golf", price: 23000, img: "https://media.ed.edmunds-media.com/volkswagen/golf-gti/2025/oem/2025_volkswagen_golf-gti_4dr-hatchback_autobahn_fq_oem_1_1600.jpg" },
    { model: "Passat", price: 28000, img: "https://hips.hearstapps.com/hmg-prod/images/db2023au00887-large-64f0a2e1c7d58.jpg" },
    { model: "Tiguan", price: 35000, img: "https://www.vwmankato.com/blogs/1677/wp-content/uploads/2024/06/14971-2022Tiguan-1024x683.jpg" },
  ],
};

const brandLogos = {
  BMW: "https://download.logo.wine/logo/BMW_in_the_United_States/BMW_in_the_United_States-Logo.wine.png",
  Audi: "https://1000logos.net/wp-content/uploads/2018/05/Emblem-Audi.png",
  Mercedes: "https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png",
  Tesla: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg",
  Porsche: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqf-xL-_zdHXvumpxNjbsJp_0eQyTWExmgZQ&s",
  Toyota: "https://cdn.freelogovectors.net/wp-content/uploads/2018/04/toyotalogo1.png",
  Lexus: "https://e7.pngegg.com/pngimages/620/329/png-clipart-lexus-logo-lexus-rx-toyota-car-lexus-is-car-logo-angle-emblem.png",
  Honda: "https://img.favpng.com/21/9/16/honda-logo-honda-civic-type-r-car-honda-cr-v-png-favpng-iSH9M91vrSjYj3D49UmkyqpJw.jpg",
  Nissan: "https://icon2.cleanpng.com/ci4/eal/cgc/ag0u328yu.webp",
  Kia: "https://www.citypng.com/public/uploads/preview/kia-black-logo-png-701751694710513ncx96yu8gs.png",
  Hyundai: "https://www.citypng.com/public/uploads/preview/hyundai-emblem-logo-transparent-background-701751694714000eobbvi2xdc.png",
  Jeep: "https://www.citypng.com/public/uploads/preview/jeep-black-logo-hd-png-701751694772047eevkbcxy7d.png",
  Volkswagen: "https://icon2.cleanpng.com/20181123/op/kisspng-volkswagen-group-car-volkswagen-jetta-logo-car-logo-volkswagen-2-2-83-kb-latest-version-1713918995848.webp",
};

export default function ListingsPage() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const containerRef = useRef(null);

  const filteredBrands =
    selectedBrand === "All" ? Object.keys(allCars) : [selectedBrand];

  const sortedCars = useMemo(() => {
    const copy = {};
    filteredBrands.forEach((brand) => {
      copy[brand] = [...allCars[brand]].sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    });
    return copy;
  }, [filteredBrands, sortOrder]);

  const handleDragEnd = (e, info) => {
    const container = containerRef.current;
    if (!container) return;
    const children = Array.from(container.children);
    const scrollLeft = container.scrollLeft;
    let closest = children[0];
    let minDiff = Math.abs(children[0].offsetLeft - scrollLeft);
    children.forEach((child) => {
      const diff = Math.abs(child.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closest = child;
      }
    });
    container.scrollTo({ left: closest.offsetLeft, behavior: "smooth" });
  };

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold text-gray-800 mb-4 text-center"
      >
        Carlo Listings
      </motion.h1>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
        Browse all available cars from verified sellers. Filter by brand and price to find your perfect ride.
      </p>

      <motion.div
        ref={containerRef}
        className="flex space-x-4 overflow-x-scroll scrollbar-hide mb-8 py-2 px-2 cursor-grab"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.button
          onClick={() => setSelectedBrand("All")}
          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
            selectedBrand === "All"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 border-gray-300"
          } transition`}
        >
          All
        </motion.button>
        {Object.keys(brandLogos).map((brand) => (
          <motion.button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full border ${
              selectedBrand === brand
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 border-gray-300"
            } transition`}
          >
            <Image src={brandLogos[brand]} alt={brand} width={24} height={24} className="object-contain" />
            <span className="hidden sm:inline">{brand}</span>
          </motion.button>
        ))}
      </motion.div>

      <div className="flex justify-center mb-12">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {filteredBrands.map((brand, idx) => (
        <section key={brand} className="mb-12">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
          >
            {brand}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCars[brand].map((car, i) => (
              <motion.div
                key={i}
                className="relative bg-white p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.03 }}
              >
                {car.badge && (
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {car.badge}
                  </span>
                )}
                <Image
                  src={car.img}
                  alt={car.model}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{car.model}</h3>
                <p className="text-gray-600 mt-1">${car.price.toLocaleString()}</p>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition duration-300">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-700">
                    View
                  </button>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-200">
                    Contact Seller
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
