import React from 'react';
import {Disclosure} from '@headlessui/react';

import { motion } from 'framer-motion';

import PreviewDot from '../components/PreviewDot';

import absorbentIcon from '../img/absorbent_icon.png'
import { Image } from '@shopify/hydrogen';



import {
  IconClose,
  Text,
  Link,
} from '~/components';
import clsx from 'clsx';


export function meta(){
  return [
    { title: 'Home | Dignex Bariatrics' },
    { description: 'A custom description.' },
  ];
}

export default function index(){

  return (
    <>
    <section className="hero relative py-32 overflow-hidden min-h-screen flex flex-col justify-center bg-[url('../img/hero-1.png')] bg-cover">
      <div className="container ">
        <div className='max-w-2xl text-white pt-8'>
          <h1 className='text-5xl font-bold'>Navigating Comfort, Dignity, and Confidence - Dignex!</h1>
          <p>Dignex bariatric diapers are designed with comfort and dignity in mind, offering superior absorbency and breathability.</p>
          <p>Plus, they come with an adjustable waistband that ensures a secure fit and maximum protection from leaks.</p>
          <div className='pt-5'><a className='cta-button' href="">BUY NOW</a></div>
        </div>
      </div>

      {/* <div className='w-full' style={{position: "absolute", bottom: "0"}}>
        <div style={{overflow: "hidden", position: "relative"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="299" viewBox="0 0 1449 299" fill="none">
          <path d="M1448 0.225708C1379.87 118.847 1144.9 324.054 732.22 220.099C315.779 115.195 77.392 186.46 10.2537 235.205L12.8266 299H1448V0.225708Z" fill="white"/>
          <path d="M1448 299H0V220C69.0481 174 310.113 112.4 721.989 234C1133.86 355.6 1377.61 155.333 1448 40.0001V299Z" fill="#559ECE"/>
          <path d="M1448 299H0.00683594L0.00736727 243.561C69.0555 202.273 310.121 146.984 721.997 256.127C1133.87 365.27 1377.62 185.519 1448.01 82.0001L1448 299Z" fill="#272D6A"/>
          </svg>
        </div>
      </div> */}

        <div style={{background: "#ffffff", width: "100%", height: "25px", position: "absolute", bottom: "0"}}></div>
        <svg
          preserveAspectRatio="none"
          viewBox="91 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#ffffff', width: '123%', height: 155, transform: 'rotate(179deg) scaleX(-1)', position: "absolute", bottom: "25"}}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>

        <div style={{background: "#559ECE", width: "100%", height: "16px", position: "absolute", bottom: "0"}}></div>

        <svg
          preserveAspectRatio="none"
          viewBox="90 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#559ECE', width: '123%', height: 155, transform: 'rotate(180deg) scaleX(-1)', position: "absolute", bottom: "15"}}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
        
        <svg
          preserveAspectRatio="none"
          viewBox="90 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#272D6A', width: '123%', height: 155, transform: 'rotate(180deg) scaleX(-1)', position: "absolute", bottom: "-1"}}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      
    </section>

    <section className='section-blue'>
      <div className='container'>
        <div className='flex flex-col items-center p-8'>
          <p className='m-0'>IN DIGNEX</p>
          <h2 className='text-7xl font-bold mb-2'>BARIATRICS</h2>
          <p className='text-lg'>quality matters to us and it is visible in our complete product range.</p>
          <div className='mt-6'>
            <img className='bg-white rounded-full p-4' src={require('../img/features.png')} alt="features" />
          </div>

          <motion.div 
          style={{opacity: 0}}
          exit={{ opacity:0 }}
          animate={{ 
            opacity: 1,
          }}
          initial={{ opacity:0 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          className='flex flex-col items-center mt-20'>
            <p className='uppercase mb-2'>scroll down to learn more</p>
            <motion.div
              animate={{ 
                y: 10,
              }}
              transition={{ ease: "linear", duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.340041 14.39L10 24L19.66 14.39C19.774 14.3032 19.868 14.1929 19.9357 14.0667C20.0033 13.9404 20.043 13.8011 20.0522 13.6581C20.0613 13.5151 20.0396 13.3719 19.9885 13.238C19.9375 13.1042 19.8583 12.9828 19.7562 12.8823C19.6542 12.7817 19.5318 12.7042 19.3972 12.6551C19.2627 12.6059 19.1191 12.5863 18.9763 12.5975C18.8335 12.6086 18.6947 12.6503 18.5694 12.7198C18.4441 12.7892 18.3352 12.8848 18.25 13L11 20.19L11 1.06C11 0.794782 10.8947 0.540429 10.7071 0.352893C10.5196 0.165357 10.2653 0.0599986 10 0.0599986C9.73483 0.0599986 9.48047 0.165357 9.29293 0.352893C9.1054 0.540429 9.00004 0.794782 9.00004 1.06L9.00004 20.19L1.75004 13C1.56174 12.813 1.30687 12.7085 1.0415 12.7094C0.776141 12.7104 0.522018 12.8167 0.33504 13.005C0.148063 13.1933 0.0435457 13.4482 0.0444841 13.7135C0.0454225 13.9789 0.151738 14.233 0.340041 14.42L0.340041 14.39Z" fill="white"/>
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
    <section>
      <div className='container'>
        <div className='py-12 flex flex-col items-center p-8 border-b border-solid border-gray-400'>
          <h2 className='text-center text-3xl font-bold max-w-lg'>Why Are Bariatric Diapers Better Than Adult Diapers?</h2>
          <p className='m-0 text-center'>They come with adjustable waistbands that provide a secure fit and maximum protection from leaks. Bariatric diapers are designed specifically for those living with bariatric conditions.</p>
        </div>
        <div className='flex flex-col items-center p-8'>
        <h1 className='mt-5 uppercase text-center text-5xl font-bold'>Our skin-friendly adult diaper</h1>
        </div>
        <div className='flex justify-center'>
          <a className='toggle-btn-active mr-2' href="">Bariatric Brief</a>
          <a className='toggle-btn ml-2' href="">Bariatric Pull-up</a>
        </div>
        <div className=' flex justify-center py-20'>
          <div className='relative'>
            <img style={{width: "528px", height: "440px"}} className='' src={require('../img/diaper_vector.jpg')} alt="diaper vector" />
            
            {/* <motion.div 
            style={{top: "143px", left: "100px"}}
            exit={{ background: "radial-gradient(circle at center, #FF4800 10%, transparent 70%)" }}
            animate={{ 
              background: "radial-gradient(circle at center, #FF4800 50%, transparent 90%)",
            }}
            initial={{ background: "radial-gradient(circle at center, #FF4800 10%, transparent 70%)" }}
            transition={{ ease: "linear", duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className='preview-dot absolute'></motion.div>

            <motion.div 
            style={{top: "120px", left: "235px"}}
            exit={{ background: "radial-gradient(circle at center, #FF4800 10%, transparent 70%)" }}
            animate={{ 
              background: "radial-gradient(circle at center, #FF4800 50%, transparent 90%)",
            }}
            initial={{ background: "radial-gradient(circle at center, #FF4800 10%, transparent 70%)" }}
            transition={{ ease: "linear", duration: 3, repeat: Infinity, repeatType: "reverse"}}
            className='preview-dot absolute'></motion.div> */}
            <PreviewDot position={{top: 120, left: 235}} isShow="show-info"></PreviewDot>

            <motion.div 
            className='preview-dot absolute'
            style={{top: "170px", left: "292px"}}
            ></motion.div>

            <motion.div 
            className='preview-dot absolute'
            style={{top: "220px", left: "278px"}}
            ></motion.div>

            <motion.div 
            className='preview-dot absolute'
            style={{top: "200px", left: "363px"}}
            ></motion.div>

            <motion.div 
            className='preview-dot absolute'
            style={{top: "330px", left: "163px"}}
            ></motion.div>


          </div>

        </div>
        <div className='flex justify-center'>
          <a className='cta-button m-auto'>BUY THIS PRODUCT</a>
        </div>

        <div className='mt-20'>
          <div className='flex border-b border-solid border-black'>
            <h3 className='uppercase mb-2 py-2 flex-1 text-center text-5xl font-bold border-r border-solid border-black'>3xl</h3>
            <h3 className='uppercase mb-2 py-2 flex-1 text-center text-5xl font-bold'>4-5xl</h3>
          </div>
          <div className='flex justify-center py-8'>
          <p className='max-w-3xl text-center'>Unlike traditional adult diapers, these specialized diapers offer extra coverage to fit larger bodies and are made with superior absorbency material that can hold up to 12 cups of liquid.</p>
          </div>
        </div>
      </div>
    </section>

    <section style={{background: "linear-gradient(180deg, rgba(48,133,189,1) 0%, rgba(39,45,106,1) 100%)", color: "#fff"}}>
      <div className='container'>
        <div className='flex flex-col items-center text-center'>
          <h3>Hard-to-Find Sizes That Cause Leaks?</h3>
          <p>Living with a bariatric condition can be challenging, especially when finding the right diaper size. </p>
          <p>Most traditional brands don't offer sizes that fit comfortably and securely for larger bodies, leaving those living with
          bariatric conditions feeling uncomfortable
          and frustrated.</p>
        </div>
        <div className='flex'>
          <div className='flex-1'>
            <img className='' src={require('../img/bariatrics_on_hand.jpg')} alt="diaper vector" />
            
          </div>
          <div className='flex-1'>
            <InfoIcon icon={absorbentIcon}>
            <b>Maximum Absorbency</b> - Dignex understands the challenges those living with bariatric conditions face. That's why we offer a complete line of bariatric diapers to fit larger bodies comfortably and securely.
            </InfoIcon>
            <InfoIcon icon={absorbentIcon}>
            <p><b>Gentle On Skin</b> - Dignex bariatric diapers are made with high-quality materials that are gentle on the skin and tough on leaks. You will be comfortable for hours with a breathable fabric and superior absorbency.</p>
            </InfoIcon>
          </div>
        </div>
      </div>
    </section>

    {/* <section className='relative overflow-hidden pb-28'>
      <div className='container'>
        <div>
          <img className='' src={require('../img/diaper_layers.png')} alt="diaper layer" />
            
        </div>
        <div className='text-center'>
          <div style={{borderLeft: "1px solid #1f1f1f", width: "1px", height: '90px', margin: "20px auto"}}></div>
          <p className='uppercase font-bold mb-0'><b>LAYERS OF OUR</b></p>
          <h3 className='uppercase text-4xl font-normal mb-0'>BARIATRICS adult diaper</h3>
          <p className=''>Talk about the layers of bariatric for them to identify the absorbsion</p>
        </div>
        <div className='flex justify-center mt-16'>
          <div className='relative flex-1 p-4 shadow-lg rounded-3xl'>
            <p className='absolute -top-7 left-1/2 transform -translate-x-1/2 font-bold text-4xl font-bold'>01</p>
            <h3 className='text-xl font-bold mb-5 text-center'>Breathable Layers</h3>
            <p className='m-0'>Circulates air for freshness and protection against unwanted odor so you can wear it discreetly under your regular clothes.</p>
          </div>
          <div className='relative flex-1 p-4 shadow-lg rounded-3xl'>
            <p className='absolute -top-7 left-1/2 transform -translate-x-1/2 font-bold text-4xl font-bold'>02</p>
            <h3 className='text-xl font-bold mb-5 text-center'>Premium Blue Core</h3>
            <p className='m-0'>Quickly absorbs liquid to ensure a dry feeling while protecting skin from irritants and bacteria, providing a fresh and clean feeling.</p>
          </div>
          <div className='relative flex-1 p-4 shadow-lg rounded-3xl'>
            <p className='absolute -top-7 left-1/2 transform -translate-x-1/2 font-bold text-4xl font-bold'>03</p>
            <h3 className='text-xl font-bold mb-5 text-center'>Cotton Outer Layers</h3>
            <p className='m-0'>Wear them like regular underwear, forget your incontinence and enjoy your day with complete care, protection, and peace!</p>
          </div>
        </div>
        
      </div>

      <div style={{background: "#ffffff", width: "100%", height: "25px", position: "absolute", bottom: "0"}}></div>
      <svg
        preserveAspectRatio="none"
        viewBox="91 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: '#ffffff', width: '123%', height: 155, transform: 'rotate(179deg) scaleX(-1)', position: "absolute", bottom: "25"}}
      >
        <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
      </svg>

      <div style={{background: "#559ECE", width: "100%", height: "16px", position: "absolute", bottom: "0"}}></div>

      <svg
        preserveAspectRatio="none"
        viewBox="90 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: '#559ECE', width: '123%', height: 155, transform: 'rotate(180deg) scaleX(-1)', position: "absolute", bottom: "15"}}
      >
        <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
      </svg>
      
      <svg
        preserveAspectRatio="none"
        viewBox="90 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: '#272D6A', width: '123%', height: 155, transform: 'rotate(180deg) scaleX(-1)', position: "absolute", bottom: "-1"}}
      >
        <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
      </svg>
    </section> */}

    {/* <section className='section-blue'>
      <div className='container '>
        <div className='text-center mt-6'>
          <h2 className='font-bold text-4xl'>PROTECTION = PEACE OF MIND</h2>
          <p>Using the right bariatric diapers can give you added protection and peace of mind. No more worrying about leaks, rashes, or uncomfortable bunching - just superior protection and comfort for your bariatric needs.</p>
        </div>
        <div className='flex'>
          <div className='flex-1'>
            <img className='' src={require('../img/dignex_bariatrics_brief.png')} alt="diaper layer" />
          </div>
          <div className='flex-1'>
            <img className='' src={require('../img/dignex_bariatrics_pullup.png')} alt="diaper layer" />
          </div>
        </div>
        <div className='flex justify-center'>
          <a className='cta-button m-auto'>VIEW PRODUCT</a>
        </div>
      </div>
    </section> */}

    {/* <section>
      <div className='container'>
        <div className='flex'>
          <div className='flex-1 pr-10'>
            <h3 className='uppercase text-2xl font-bold'>The Perfect Solution For Bariatric Needs Begins Here</h3>
            <p><b>Dignex Bariatric Diapers</b> offer briefs and pull-ups that provide superior comfort and leak protection. Available in sizes from <b>3Xl to 5XL</b>, Dignex has the right bariatric diaper for your unique needs.</p>
            <h3 className='mt-7 uppercase text-2xl font-bold'>Never Compromise Your Comfort When You Have Dignex Bariatric Diapers. </h3>
            <p><b>Choose Dignex</b> for superior protection and comfort - all for a price that won't break the bank! </p>
            <p>We'll help you get back on track with a product you can trust and <b>feel confident</b> wearing. </p>
            <p><b>Buy now</b> and enjoy the dignity, comfort, and confidence of having the right bariatric diaper solution.</p>
            <div className='flex'>
              <a className='cta-button'>BUY NOW</a>
            </div>
          </div>
          <div className='flex flex-1 justify-center'>
            <img className='w-4/5 xl:w-3/5' src={require('../img/senior_outdoor.png')} alt="diaper layer" />
          </div>
        </div>
        
      </div>
    </section> */}

    <section className='section-blue'>
      <div className='container'>
        <div className='flex flex-col text-center items-center'>
          <h3>We Aim To Provide The Best Care You Deserve</h3>
          <p>Get your life back. Do your daily chores without worrying about accidental leaks or other pelvic floor-related problems. Our goal is to provide you with the best care that you deserve.</p>
          <a className='cta-button m-auto'>VIEW PRODUCTS</a>
        </div>
      </div>
    </section>

    <section style={{background: "linear-gradient(180deg, #fff 0%, #272D6A 100%)", color: "#fff"}}>
      <div className='pt-8'>
        <div className='flex'>
          <div className='flex-1'>
            <img src={require('../img/senior_couple_hug.png')} alt="senior couple" />
          </div>
          <div className='relative flex-1 text-blue'>
            <div className='max-w-lg'>
            <h3 className='uppercase text-4xl font-bold'>Why Dignex Bariatric Diapers Is Here?</h3>
            <p>Oversized diapers are not only hard to find, but they can also be expensive.</p>
            <p>That’s why we have designed the Dignex Bariatric Diapers line specifically for people with bariatric issues or other conditions that require extra-large products.</p>
            </div>
            <div className='absolute bottom-0 -left-10'>
              <img className='w-96' src={require('../img/dignex-box.png')} alt="senior couple" />
            </div>
          </div>
        </div>
      </div>
    </section>

    

    {/* <section>
      <div className='container'>

      <div class="hs-accordion-group">
  <div class="hs-accordion active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
    <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
      Accordion #1
      <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
      <p class="text-gray-800 dark:text-gray-200">
        <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
    </div>
  </div>

  <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-two">
    <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
      Accordion #2
      <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
      <p class="text-gray-800 dark:text-gray-200">
        <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
    </div>
  </div>

  <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-three">
    <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
      Accordion #3
      <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
      <p class="text-gray-800 dark:text-gray-200">
        <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
    </div>
  </div>
</div>

      </div>
    </section> */}

      <section>
        <div className='container'>
        <div className='flex justify-center'>
          <h2 className='text-3xl font-bold'>Frequently Asked Questions</h2>
        </div>
        <ProductDetail2
          title="Description"
          content="Reliable, Soft, And Breathable Materials Protection and comfort come first. With its Premium Blue Core, Dignex Bariatric Briefs quickly lock away moisture to keep you dry and comfortable. The soft and breathable materials help prevent rashes and skin irritation from developing. Its extra-wide soft stretched panels offer an adjustable fit that caters to your needs. With a liquid capacity of 2500 ml and a range of sizes that fits up to 5XL, Dignex Bariatric Briefs are perfect for those who need maximum absorbency. Day in and day out, you'll have the protection and support you need with Dignex Bariatric Briefs."
        />
        </div>
      </section>

    </>
  )
}

function InfoIcon({children, icon}){
  return(
    <>
      <div className='flex mb-4'>
        <div className='icon-info-round'>
          <img className='' src={icon} />
        </div>
        <div className='flex-1'>
          <p>{children}</p>
        </div>
      </div>
    </>
  );
}

function ProductDetail2({title, content, learnMore}) {
  return (
    <Disclosure key={title} as="div" className="grid w-full gap-2 py-4 px-5 rounded-md" style={{background: "#F0F1F3"}}>
      {({open}) => (
        <>
          <Disclosure.Button className="text-left">
            <div className="flex justify-between items-center">
              <Text className="m-0" size="lead" as="h4">
                {title}
              </Text>
              <IconClose
                className={clsx(
                  'transition-transform transform-gpu duration-200',
                  !open && 'rotate-[45deg]',
                )
                }
              />
            </div>
          </Disclosure.Button>

          <Disclosure.Panel className={'pb-4 pt-2 grid gap-2'}>
            <div
              className="text-gray-500"
              dangerouslySetInnerHTML={{__html: content}}
            />
            {learnMore && (
              <div className="">
                <Link
                  className="pb-px border-b border-primary/30 text-primary/50"
                  to={learnMore}
                >
                  Learn more
                </Link>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

