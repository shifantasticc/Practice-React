import Product from './Product.jsx';

function ProductTab() {
  let styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={styles}>
      <Product title="Fourth Wing" idx={0} />
      <Product title="The Inheritance Games" idx={1} />
      <Product title="The Silent Patient" idx={2} />
      <Product title="Rock Paper Scissors" idx={3} />
    </div>
  );
}

export default ProductTab;
