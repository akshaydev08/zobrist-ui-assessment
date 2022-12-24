export interface ItemProps {
  title: string;
  price: string;
  image: string;
}
export const Item = ({ title, price, image }: ItemProps) => {
  return (
    <div className='item'>
      <div>
        <img src={image} alt={title} />
      </div>
      <h4 className='item-title'>{title}</h4>
      <p className='item-price'>{price}</p>
    </div>
  );
};
