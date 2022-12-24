import { Item, ItemProps } from '../Item';

export interface ItemsProps {
  items: ItemProps[];
}
export const Items = ({ items }: ItemsProps) => {
  return (
    <div className='items'>
      {items.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
};
