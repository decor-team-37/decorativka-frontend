import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/home.page';
import { Contacts } from './pages/contacts.page/contacts.page';
import { AboutUsPage } from './pages/about.us.page';
import { BasketPage } from './pages/basket.page';
import { GlobalProvider } from './store/GlobalContext';
import { FavoritePage } from './pages/favorite.page';
import { PlaceAnOrder } from './pages/place.an.order/place.an.order';
import { Cooperation } from './pages/cooperation-page';
import { NotFoundPage } from './pages/not-found-page';

export const Root = () => (
  <Router>
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="cooperation" element={<Cooperation />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about_us" element={<AboutUsPage />} />
          <Route path="basket">
            <Route index element={<BasketPage />} />
            <Route path="place_an_order" element={<PlaceAnOrder />} />
          </Route>
          <Route path="favorite" element={<FavoritePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </GlobalProvider>
  </Router>
);
