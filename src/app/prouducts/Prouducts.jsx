import { getProducts } from "@/lib/shopify";

export default async function Products(){
    const prouducts = await getProducts()
    return(
        <div>
            {prouducts.map(({node}) => (
                <div key={node.id}>
                    <h2>{node.title}</h2>
                    <img src={node.images.edges[0].node.url} width="200"/>
                    <p>{node.variants.edges[0].node.price.amount} kr</p>
                </div>
               
            ))}
        </div>
    )
}