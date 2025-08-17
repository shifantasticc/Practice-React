import './Product.css';
import Price from './Price.jsx';

function Product({ title, idx }) {
  let oldPrices = ['1,499', '1,775', '1,771', '1,899'];
  let newPrices = ['399', '370', '307', '449'];
  let description = [
    ['by Rebecca Yarros ', 'A war college to become a dragon rider'],
    ['by Jennifer Lynn Barnes ', "A teen inherits a billionaire's fortune"],
    [
      'by Alex Michaelides ',
      'She shoots her husband five times-then falls silent',
    ],
    [
      'by Alice Feeney ',
      "A married couple's weekend getaway in a remote chapel",
    ],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
