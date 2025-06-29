export default async function Review({params}) {
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;

  
  return (
    <div>
      <h1>Review {reviewId} for Product {productId}</h1>
    </div>
  );
}