

export default function index(){

  return(
    <>
      <section className="hero relative overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="container flex gap-4">
          <div className="flex-1">
            <p style={{color: "#F36C37"}} className="m-0 ">DIGNEX ADULT DIAPER</p>
            <h1 style={{color: "#272D6A", fontWeight: "bold"}} >Bariatrics Brief</h1>
            <p>Protection and comfort come first. With its Premium Blue Core, Dignex Bariatric Briefs quickly lock away moisture to keep you dry and comfortable. The soft and breathable materials help prevent rashes and skin irritation from developing. Its extra-wide soft stretched panels offer an adjustable fit that caters to your needs.</p>
            <a href="/products/bariatric-test-product"><div className="w-full mt-6 font-bold mb-4 buy-cta-button">BUY NOW</div></a>
            <p>CHOOSE BELOW TO ORDER</p>
            <div className="flex gap-2">
              <a className="buy-method-button uppercase py-3 px-7 rounded-full text-center" href="">DISTRIBUTOR</a>
              <a className="buy-method-button uppercase py-3 px-7 rounded-full text-center" href="">WHOLESALE</a>
              <a className="buy-method-button uppercase py-3 px-7 rounded-full text-center" href="">DROP SHIPPING</a>
            </div>

          </div>
          <div className="flex-1 flex justify-center items-center">
            <img style={{width: "500px"}} src={require("../img/dignex_bariatrics_brief.png")} alt="Dignex Bariatrics Brief" />
          </div>
        </div>
      </section>
      <section className="pb-4">
        <div className="container flex gap-4">
          <div className="flex-1 flex justify-center items-center">
            <img style={{width: "500px"}} src={require("../img/dignex_bariatrics_pullup.png")} alt="Dignex Bariatrics Brief" />
          </div>
          <div className="flex-1">
            <p style={{color: "#F36C37"}} className="m-0 ">DIGNEX ADULT DIAPER</p>
            <h1 style={{color: "#272D6A", fontWeight: "bold"}} >Bariatrics Pull-up</h1>
            <p>Dignex Bariatric Pull-Ups are designed to provide a comfortable and secure fit for those with larger waists. With superior absorbency, Dignex Bariatric Pull-Ups allow people to go about their daily activities without worry of leakage or skin irritation.</p>
            <a href="/products/bariatric-test-product"><div className="w-full mt-6 font-bold mb-4 buy-cta-button">BUY NOW</div></a>
            <p>CHOOSE BELOW TO ORDER</p>
            <div className="flex gap-2">
              <a className="buy-method-button uppercase py-3 px-7 rounded-full text-center" href="">DISTRIBUTOR</a>
              <a className="buy-method-button uppercase py-3 px-7 rounded-full text-center" href="">WHOLESALE</a>
              <a className="buy-method-button uppercase py-3 px-7 rounded-full text-center" href="">DROP SHIPPING</a>
            </div>

          </div>
          
        </div>
      </section>
    </>
  );
}