import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas ProductImage', () => {
  test('should mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img={product2.img} />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should mostrar correctamente el componente con la url de la imagen', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
