import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button } from '../../components/Button';
import { GlobalContext } from '../../store/GlobalContext';
import { getCartItems } from '../../helpers/getProductsByCategories';
import { Loader } from '../../components/Loader';
import { TableProductsBasket } from './table.product.baskets';
import './basket.page.scss';
import { getProducts, getProductsById } from '../../services/AppServices';

/* const promise = fetch('http://localhost:8081/api/v1/categories');

promise.then(res => {
  res.json().then(a => a);
}); */

export const BasketPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { localStore, handleChooseCart } = useContext(GlobalContext);
  const cartItemsOrder = getCartItems(localStore);
  const timerId = useRef(0);

  useEffect(() => {
    setIsLoading(true);
    window.clearTimeout(timerId.current);

    // const promise = getProductsById(2);
    const promise1 = getProducts();

    // promise.then(res => console.log(res));
    promise1.then(res => console.log(res));

    timerId.current = window.setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="basket">
      <div className="content">
        <div className="basket__nav">
          <div className="icon icon--hover icon--basket basket__icon" />
          <h3 className="title title--h3 basket__title">КОШИК</h3>
        </div>

        {isLoading && <Loader />}

        {!isLoading && !!cartItemsOrder.length && (
          <section>
            <TableProductsBasket
              cartItemsOrder={cartItemsOrder}
              handleChooseCart={handleChooseCart}
            />
          </section>
        )}

        {!isLoading && !cartItemsOrder.length && (
          <section>
            <div className="basket__table">
              <p className="basket__table-text">Ваш кошик порожній</p>
            </div>
          </section>
        )}

        <div className="basket__buttons">
          <Button $secondary path="..">
            Продовжити покупки
          </Button>

          {!isLoading && !!cartItemsOrder.length && (
            <Button $primary path="/basket/place_an_order">
              Офрормити замовлення
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
