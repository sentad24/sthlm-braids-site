export async function getProducts() {
    const res = await fetch(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token":
            process.env.SHOPIFY_STOREFRONT_TOKEN,
        },
        body: JSON.stringify({
          query: `
          {
            products(first: 6) {
              edges {
                node {
                  id
                  title
                  handle
                  images(first:1){
                    edges{
                      node{
                        url
                      }
                    }
                  }
                  variants(first:1){
                    edges{
                      node{
                        price{
                          amount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          `,
        }),
      }
    );
    const data = await res.json();
    return data.data.products.edges;
}