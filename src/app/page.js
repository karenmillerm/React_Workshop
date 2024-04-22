import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <div className={styles.description}>
      <p>
        Get started by Karen
      </p>
    </div>
  </main>
  );
}
// export default async function Products() {
//   const
//   getProducts = async () => {
//   const res
//   = await fetch ( 'https://dummyjson.com/products')
//   return res. json ( )
//   }

//   const data = await getProducts ()

//   return (
//     <>
//     <h1>Products</h1>
//     <ul className="grid grid-cols-4 gap-4 items-center">
//       {
//       data.products.map( (item, index) => ( 
//       <li className="w-52 mx-4" key={index}>
//         <img src={item.thumbnail} alt={item.title} />
//         <div className="p-2 text-sm text-black bg-gray-400">
//           {item.title} <span className="rounded-lg p-1 px-1 ml-2 bg-gray-200">${item-price}</ span>
//         </div>
//       </li>
//     ))
//     }
//     </ul>
//     </>
//     )
// }
