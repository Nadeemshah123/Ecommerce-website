import Image from "next/image";

export default function Cart() {
  return (
    <>
      <div className='sm:w-full lg:w-[1024px] h-auto p-4 sm:pl-6 lg:pl-10 bg-[#F6F5FF]'>
        <Image 
          src="/images/shopping-cart/01.png" 
          alt="Cart Logo" 
          width={180} 
          height={44} 
          className='mx-auto sm:mx-0' 
        />
      </div>

      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section: Product List */}
          <div className="lg:col-span-2 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-[#1D3178]">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Product</th>
                  <th className="border border-gray-300 p-2">Price</th>
                  <th className="border border-gray-300 p-2">Quantity</th>
                  <th className="border border-gray-300 p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* Repeatable Rows */}
                {[...Array(5)].map((_, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">
                      <div className="flex flex-wrap items-start gap-4">
                        <Image 
                          src={`/images/shopping-cart/p${index + 1}.png`} 
                          alt={`Product ${index + 1}`} 
                          width={50} 
                          height={50} 
                          className="flex-shrink-0"
                        />
                        <div>
                          <span className="text-lg block">Product Name {index + 1}</span>
                          <div className="text-sm text-gray-500">Color: Brown</div>
                          <div className="text-sm text-gray-500">Size: XL</div>
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-2 text-center">$32.00</td>
                    <td className="border border-gray-300 p-2 text-center">
                      <input
                        type="number"
                        className="w-16 border border-gray-300 text-center"
                        defaultValue={1}
                      />
                    </td>
                    <td className="border border-gray-300 p-2 text-center">$219.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <button className="bg-[#FB2E86] text-white px-4 py-2">Update Cart</button>
              <button className="bg-[#FB2E86] text-white px-4 py-2">Clear Cart</button>
            </div>
          </div>

          {/* Right Section: Cart Totals and Shipping */}
          <div>
            <div className="border border-gray-300 bg-[#F4F4FC] p-4 mb-4 text-[#1D3178]">
              <h2 className="text-xl font-semibold mb-2">Cart Totals</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>$219.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total:</span>
                <span>$219.00</span>
              </div>
              <button className="w-full bg-[#19D16F] text-white px-4 py-2">
                Proceed to Checkout
              </button>
            </div>
            <div className="border border-gray-300 bg-[#F4F4FC] p-4 text-[#1D3178]">
              <h2 className="text-xl font-semibold mb-2">Calculate Shipping</h2>
              <input
                type="text"
                placeholder="Country"
                className="w-full border border-gray-300 p-2 mb-2"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 p-2 mb-2"
              />
              <button className="w-full bg-[#FB2E86] text-white px-4 py-2">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}