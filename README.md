# SMC-Product-Card

Paquete de pruebas de despliegue en npm

### Sergio Mejia

## Ejemplo

```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'smc-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
    >
    {() => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
    )}
</ProductCard>

```