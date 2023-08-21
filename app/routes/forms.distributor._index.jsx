import {
  Button,
  Heading,
  IconRemove,
  Text,
  Link,
  FeaturedProducts,
} from '~/components';

export default function index(){
  return(
    <>
      <section>
        <div className='container mt-36'>
          <CartLineItem2></CartLineItem2>
        </div>
      </section>
      <section className=' flex justify-center'>
        <div className="container">
        <form className="w-full max-w-lg-test">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Delivery Address
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Delivery Address" />
              <p className="text-gray-600 text-xs italic">Text sample</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Contact Number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>

          {/* <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                City
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                State
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Zip
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
            </div>
          </div> */}
          <div className="flex justify-center">
            <button type="submit" className="cta-button w-full max-w-lg">CHECK OUT</button>
          </div>
        </form>
        </div>
      </section>
      
    </>
  );
}


function CartLineItem2({line}) {
  // if (!line?.id) return null;

  // const {id, quantity, merchandise} = line;

  // if (typeof quantity === 'undefined' || !merchandise?.product) return null;

  return (

    <div className='flex gap-4'>
      <div className="flex-shrink">
        <img className="object-cover object-center w-24 h-24  border rounded md:w-72 md:h-72" src="" />
      </div>

      <div className="flex justify-between flex-grow" style={{color: "#486284"}}>
        <div className="grid gap-2">
          <Heading as="h3" size="copy" className='text-xl md:text-3xl' style={{color: "#272D6A", fontWeight: "bold", marginBottom: "10px"}}>
            Test
          </Heading>

          <div className="flex justify-between flex-grow" style={{color: "#486284"}}>
            <div className="grid gap-2">
              <div className="grid pb-2">
                <div className='flex gap-2'>
                {/* {(merchandise?.selectedOptions || []).map((option) => ( */}
                  <div >
                    <p className='uppercase my-2'>
                      Option Name
                    </p>
                    <p className="py-3 px-6" style={{background: "#F2F2F2",  borderRadius: "8px"}}>
                      Option Value
                    </p>
                  </div>
                {/* ))} */}
                </div>
                {/* <div className="flex items-center gap-2 mt-4">
                  <div className="flex justify-start text-copy">
                    <CartLineQuantityAdjust line={line} />
                  </div>
                  <ItemRemoveButton lineIds={[id]} />
                </div>
                <div>
                  <p className='my-2'>TOTAL</p>
                  <div className='py-2 px-5 flex justify-center items-center max-w-sm' style={{background: "#F2F2F2",  borderRadius: "8px"}}>
                    <Text>
                      <CartLinePrice line={line} as="span" />
                    </Text>
                  </div>
                </div> */}
                <div className="flex items-center border rounded">
                  <button
                    name="decrease-quantity"
                    aria-label="Decrease quantity"
                    className="w-10 h-10 transition text-primary/50 hover:text-primary disabled:text-primary/10"
                  >
                    <span>&#8722;</span>
                  </button>
                  <div className="px-2 text-center" data-test="item-quantity">
                    1
                  </div>
                  <button
                    className="w-10 h-10 transition text-primary/50 hover:text-primary"
                    name="increase-quantity"
                    aria-label="Increase quantity"
                  >
                    <span>&#43;</span>
                  </button>

                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>

    // <li key={id} className="flex gap-4">
    //   <div className="flex-shrink">
    //     {merchandise.image && (
    //       <Image
    //         width={410}
    //         height={410}
    //         data={merchandise.image}
    //         className="object-cover object-center w-24  border rounded md:w-72"
    //         alt={merchandise.title}
    //       />
    //     )}
    //   </div>

    //   <div className="flex justify-between flex-grow" style={{color: "#486284"}}>
    //     <div className="grid gap-2">
    //       <Heading as="h3" size="copy" className='text-xl md:text-3xl' style={{color: "#272D6A", fontWeight: "bold", marginBottom: "10px"}}>
    //         {merchandise?.product?.handle ? (
    //           <Link to={`/products/${merchandise.product.handle}`}>
    //             {merchandise?.product?.title || ''}
    //           </Link>
    //         ) : (
    //           <Text>{merchandise?.product?.title || ''}</Text>
    //         )}
    //       </Heading>

    //       <div className="grid pb-2">
    //         <div className='flex gap-2'>
    //         {(merchandise?.selectedOptions || []).map((option) => (
    //           <div >
    //             <p className='uppercase my-2'>
    //               {option.name}
    //             </p>
    //             <Text className="py-3 px-6" style={{background: "#F2F2F2",  borderRadius: "8px"}} color="subtle" key={option.name}>
    //               {option.value}
    //             </Text>
    //           </div>
    //         ))}
    //         </div>
    //         <div className="flex items-center gap-2 mt-4">
    //           <div className="flex justify-start text-copy">
    //             <CartLineQuantityAdjust line={line} />
    //           </div>
    //           <ItemRemoveButton lineIds={[id]} />
    //         </div>
    //         <div>
    //           <p className='my-2'>TOTAL</p>
    //           <div className='py-2 px-5 flex justify-center items-center max-w-sm' style={{background: "#F2F2F2",  borderRadius: "8px"}}>
    //             <Text>
    //               <CartLinePrice line={line} as="span" />
    //             </Text>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
        
    //   </div>
    // </li>
  );
}