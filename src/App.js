import './App.scss';
import { React, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarLayout from './UI/AppFrame/NavbarLayout.js';
import Newbies from './Pages/Newbies/Newbies';
import { ThemeProvider } from '@emotion/react';
import theme from './MUIthemeOverrides';
import Footer from './UI/Footer/Footer';
import GoogleForm from './Pages/GoogleForm/GoogleForm';
import CoinForecast from './Pages/CoinForecast/CoinForecast';
import FeatureRequest from './Pages/FeatureRequest/FeatureRequest';
import QuickCompare from './Pages/QuickCompare/QuickCompare';
import NewsBanner from './components/NewsBanner/NewsBanner';
import CookiesBanner from './components/CookiesBanner/CookiesBanner';

function App() {
  // - News banner options
  let newsLink = '#';
  let mobileHeadline = 'We announced a new product!';
  let desktopHeadline =
    "Big news! We're excited to announce a brand new product.";
  // - Modal Logic
  const [open, setOpen] = useState(false);
  const [openNews, setOpenNews] = useState(true);
  const [openDisclaimer, setOpenDisclaimer] = useState(true);
  const [title, setTitle] = useState('title');
  const [info, setInfo] = useState('info');
  const [link, setLink] = useState('link');

  // - Local storage logic
  const doesLocalStorageExist = localStorage.getItem('understand');
  const [understand, setUnderstand] = useState(false);
  const parsedDate = Date.parse(localStorage.understand);
  const currentDate = new Date();
  //. If the date of the accepted cookie + 7 days, is less than the current date, the cookie persists.
  if (understand && parsedDate < currentDate) {
    localStorage.removeItem('understand');
    setUnderstand(false);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarLayout>
          <NewsBanner
            openNews={openNews}
            setOpenNews={setOpenNews}
            newsLink={newsLink}
            mobileHeadline={mobileHeadline}
            desktopHeadline={desktopHeadline}
          />
          <Routes>
            <Route path='*' exact element={<GoogleForm />}></Route>
            <Route path='/coin-forecast' element={<CoinForecast />}></Route>
            <Route path='/quick-compare' element={<QuickCompare />}></Route>
            <Route
              path='/feature-request-form'
              element={<FeatureRequest />}></Route>
            <Route
              path='/newbies'
              element={
                <Newbies
                  open={open}
                  setOpen={setOpen}
                  title={title}
                  setTitle={setTitle}
                  info={info}
                  setInfo={setInfo}
                  link={link}
                  setLink={setLink}
                />
              }></Route>
          </Routes>
          <Footer />
          {!doesLocalStorageExist && (
            <CookiesBanner
              open={openDisclaimer}
              setOpen={setOpenDisclaimer}
              understand={understand}
              setUnderstand={setUnderstand}
            />
          )}
        </NavbarLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
