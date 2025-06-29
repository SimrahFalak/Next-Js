export default async function Reviews({params}) {
  const productId = (await params).productId;
  
  return (
    <div>
      <h1>Review for Product {productId}</h1>
    </div>
  );
}