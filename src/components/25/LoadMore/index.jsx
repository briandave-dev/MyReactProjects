import { useEffect, useState } from "react";

const LoadMore = ({}) => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?.limit=20&skip=${count === 0 ? 0 : count*20}`)
            const result = await response.json()

            if(result && result.products.length !== 0) {
                setProducts(result.products)
                setLoading(false)
            }
        } catch(e){
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    if(loading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return ( 
        <div className="flex flex-col gap-[20px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {
                    products && products.length ? 
                    products.map((item) => (
                        <div key={item.id} className="p-4 border border-black flex flex-col gap-2">
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null
                }
            </div>
            <div className="">
                <button>Load more</button>
            </div>
        </div>
     );
}
 
export default LoadMore;