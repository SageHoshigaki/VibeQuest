import React from 'react';

export default function CartSectionCheckoutGradient1() {
    return (
        <React.Fragment>
            <>
                <section className="section has-background-dark">
  <div className="container">
    <div className="has-mw-md has-mw-none-tablet mx-auto">
      <h3 className="title is-size-2 has-text-white mb-12">Checkout</h3>
      <div className="columns is-multiline">
        <div className="column is-6 mb-8 mb-0-tablet">
          <form action="">
            <div className="field mb-10 pb-12" style={{borderBottom: '1px solid rgba(132, 135, 138, 0.15)'}}>
              <h6 className="has-text-weight-bold has-text-white mb-6">Contact Information</h6>
              <div className="field pb-12 mb-8" style={{borderBottom: '1px solid rgba(132, 135, 138, 0.15)'}}>
                <label className="label is-size-6">Email Address</label>
                <div className="control">
                  <input className="input" type="email" />
                </div>
              </div>
              <h6 className="has-text-weight-bold has-text-white mb-6">Shipping Information</h6>
              <div className="field-body mb-6">
                <div className="field mb-6-touch">
                  <label className="label is-size-6">First Name</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label is-size-6">Last Name</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
              </div>
              <label className="label is-size-6">Company</label>
              <div className="control mb-6">
                <input className="input" type="text" />
              </div>
              <label className="label is-size-6">Address</label>
              <div className="control mb-6">
                <input className="input" type="text" />
              </div>
              <label className="label is-size-6">Apartament, suite, etc.</label>
              <div className="control mb-6">
                <input className="input" type="text" />
              </div>
              <div className="field-body mb-6">
                <div className="field mb-6-touch">
                  <label className="label is-size-6">City</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label is-size-6">Country</label>
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select>
                        <option className="has-text-dark" value={1}>United States</option>
                        <option className="has-text-dark" value={2}>United States</option>
                        <option className="has-text-dark" value={3}>United States</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field-body mb-6">
                <div className="field mb-6-touch">
                  <label className="label is-size-6">State / Province</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label is-size-6">Postal Code</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
              </div>
              <label className="label is-size-6">Phone</label>
              <div className="control">
                <input className="input" type="text" />
              </div>
            </div>
            <div className="mb-8 pb-12" style={{borderBottom: '1px solid rgba(132, 135, 138, 0.15)'}}>
              <h6 className="has-text-weight-bold has-text-white mb-6">Delivery Method</h6>
              <div className="columns is-multiline">
                <div className="column is-6">
                  <button className="is-relative button is-flex-direction-column is-align-items-start is-fullwidth has-text-weight-normal has-background-dark" style={{height: '100%', border: '1.5px solid #F2FF5A'}}>
                    <span className="is-block has-text-white mb-2 has-text-weight-bold">Standard</span>
                    <span className="is-block has-text-grey-lighter mb-8">4-10 business days</span>
                    <span className="has-text-white has-text-weight-bold">$5.00</span>
                    <span className="is-absolute is-top-0 is-right-0 p-4">
                      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={8} cy={8} r={8} fill="#F2FF5A" />
                        <path d="M5.0332 8.42412L6.73017 10.1211L10.9726 5.87866" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="column is-6">
                  <button className="button is-flex-direction-column is-align-items-start is-fullwidth has-text-weight-normal has-background-grey-darker" style={{height: '100%', border: '1.5px solid #212124'}}>
                    <span className="is-block has-text-white mb-2 has-text-weight-bold">Express</span>
                    <span className="is-block has-text-grey-lighter mb-8">2-5 business days</span>
                    <span className="has-text-white has-text-weight-bold">$14.00</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="field">
              <h6 className="has-text-weight-bold has-text-white mb-6">Payment</h6>
              <div className="mb-8 is-flex-tablet is-align-items-center">
                <div className="control mb-3 mb-0-tablet mr-8">
                  <label className="radio has-text-grey-lighter" htmlFor="">
                    <input className="mr-2" type="radio" name="option" id="" defaultChecked="" />
                    <span>Credit card</span>
                  </label>
                </div>
                <div className="control mb-3 mb-0-tablet mr-8">
                  <label className="radio has-text-grey-lighter" htmlFor="">
                    <input className="mr-2" type="radio" name="option" id="" defaultChecked="" />
                    <span>PayPal</span>
                  </label>
                </div>
                <div className="control">
                  <label className="radio has-text-grey-lighter" htmlFor="">
                    <input className="mr-2" type="radio" name="option" id="" defaultChecked="" />
                    <span>eTransfer</span>
                  </label>
                </div>
              </div>
              <label className="label is-size-6">Card Number</label>
              <div className="control mb-6">
                <input className="input" type="text" />
              </div>
              <div className="field-body">
                <div className="field">
                  <label className="label is-size-6">Name on Card</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label is-size-6">Expiration (MM/YY)</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label is-size-6">CVC</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="column is-6">
          <div className="has-mw-lg mx-auto mr-0-widescreen">
            <h6 className="title is-size-5 has-text-white mb-5">Order Details</h6>
            <div className="has-background-grey-darker">
              <div className="is-flex p-8 is-align-items-start" style={{borderBottom: '1px solid rgba(132, 135, 138, 0.15)'}}>
                <img className="image is-fullwidth is-covered" src="vendia-assets/images/checkout/item-checkout1.png" alt="" style={{maxWidth: 80, maxHeight: 110, height: '100%'}} />
                <div className="pl-5" style={{width: '100%'}}>
                  <div className="mb-4 is-flex is-justify-content-space-between is-align-items-start">
                    <div className="mr-10">
                      <a className="is-inline-block has-text-weight-bold has-text-white mb-1" href="#">Basic Tee</a>
                      <span className="has-text-grey-lighter is-block has-text-weight-medium">Sienna</span>
                      <span className="has-text-grey-lighter is-block has-text-weight-medium">Large</span>
                    </div>
                    <button className="button is-ghost p-0">
                      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L12 4M4 4L12 12" stroke="#A1A4A8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="is-flex is-justify-content-space-between is-align-items-end">
                    <span className="has-text-white has-text-weight-bold">$32.00</span>
                    <div className="is-inline-flex is-align-items-center has-text-weight-bold" style={{height: 35, border: '1px solid rgba(132, 135, 138, 0.15)'}}>
                      <input className="input py-0 is-size-7 has-text-weight-bold has-text-centered has-background-grey-darker" style={{height: '100%', width: 45, border: 'none'}} type="number" placeholder={1} />
                      <button className="button is-ghost p-0">
                        <svg width={13} height={7} viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.75 1.25L6.5 6.5L1.25 1.25" stroke="#84878A" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="is-flex p-8 is-align-items-start" style={{borderBottom: '1px solid rgba(132, 135, 138, 0.15)'}}>
                <img className="image is-fullwidth is-covered" src="vendia-assets/images/checkout/item-checkout2.png" alt="" style={{maxWidth: 80, maxHeight: 110, height: '100%'}} />
                <div className="pl-5" style={{width: '100%'}}>
                  <div className="mb-4 is-flex is-justify-content-space-between is-align-items-start">
                    <div className="mr-10">
                      <a className="is-inline-block has-text-weight-bold has-text-white mb-1" href="#">Basic Tee</a>
                      <span className="has-text-grey-lighter is-block has-text-weight-medium">Sienna</span>
                      <span className="has-text-grey-lighter is-block has-text-weight-medium">Large</span>
                    </div>
                    <button className="button is-ghost p-0">
                      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L12 4M4 4L12 12" stroke="#A1A4A8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="is-flex is-justify-content-space-between is-align-items-end">
                    <span className="has-text-white has-text-weight-bold">$32.00</span>
                    <div className="is-inline-flex is-align-items-center has-text-weight-bold" style={{height: 35, border: '1px solid rgba(132, 135, 138, 0.15)'}}>
                      <input className="input py-0 is-size-7 has-text-weight-bold has-text-centered has-background-grey-darker" style={{height: '100%', width: 45, border: 'none'}} type="number" placeholder={1} />
                      <button className="button is-ghost p-0">
                        <svg width={13} height={7} viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.75 1.25L6.5 6.5L1.25 1.25" stroke="#84878A" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-5 is-vcentered is-flex is-justify-content-space-between is-align-items-center">
                  <span className="is-size-6 has-text-grey-lighter has-text-weight-medium">Subtotal</span>
                  <span className="is-size-6 has-text-white has-text-weight-medium">$64.00</span>
                </div>
                <div className="mb-5 is-vcentered is-flex is-justify-content-space-between is-align-items-center">
                  <span className="is-size-6 has-text-grey-lighter has-text-weight-medium">Shipping</span>
                  <span className="is-size-6 has-text-white has-text-weight-medium">$5.00</span>
                </div>
                <div className="mb-5 is-vcentered is-flex is-justify-content-space-between is-align-items-center">
                  <span className="is-size-6 has-text-grey-lighter has-text-weight-medium">Taxes</span>
                  <span className="is-size-6 has-text-white has-text-weight-medium">$5.52</span>
                </div>
                <div className="mb-8 is-vcentered is-flex is-justify-content-space-between is-align-items-center">
                  <span className="has-text-white has-text-weight-bold">Total</span>
                  <span className="has-text-white has-text-weight-bold">$75.52</span>
                </div>
                <a className="button is-borderless has-background-gradient-primary is-fullwidth" href="#">Confirm Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

