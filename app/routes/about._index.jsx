import {Disclosure} from '@headlessui/react';

import {
  IconClose,
  Text,
  Link,
} from '~/components';
import clsx from 'clsx';

export default function index(){
  return(
    <>
      <section className='relative overflow-hidden pb-28'>
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
      </section>

      <section className='section-blue'>
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
      </section>

      <section>
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
      </section>

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
