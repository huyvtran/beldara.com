
import React, {Component} from 'react';

import "./career.css";

class FaqSeller extends Component {
    render() {
        return (
<div class="col-lg-9 col-md-8 col-sm-12 col-xs-12  mb--sm">

<div class="accordion" id="accordionExample">
    <div class="card">
        <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                <button id="How_to_sell_my_product_if_Im_new_on_Beldara.com" class="btn btn-link" type="button" data-toggle="collapse" data-target="#One" aria-expanded="true" aria-controls="One" onclick="submit(this)">
                    Q: How to sell my product if I'm new on Beldara.com?
                </button>
            </h5>
        </div>

        <div id="One" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                <p>Beldara.com is a global b2b marketplace that connects buyers with sellers. The benefits of joining Beldara.com range from connecting with a wide variety of buyers and sellers to getting volume discounts. You can also trust Beldara.com to help you get recognition in front of an international audience as we are expanding our global reach every day by entering new markets. If you join us as a seller, you can lure the audience in these markets to buy from you and earn well.</p>
                <p>The process of creating a seller account on Beldara.com is easy. You just need to visit the website and click on the join free option available in the top right corner of the website. You can also set up an account by visiting seller.beldara.com. To sign up, you just need to provide some basic details like your name, contact information and the category you want to sell products in. It’s as simple as 1-2-3. Your registration would be completed within a few minutes when you get a call from one of our executives at Beldara.com.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
                <button id="How_to_get_more_buyer_inquiries" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Two" aria-expanded="false" aria-controls="Two" onclick="submit(this)">
                    Q: How to get more buyer inquiries?
                </button>
            </h5>
        </div>
        <div id="Two" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
                <p>Though there are many ways to increase the number of <b>buyer inquiries</b> you get every day, some of them are mentioned over here:</p>
                <p>• 	Make sure that you pick the <b>right product category</b></p>
                <p>• 	The Product Title needs to be a <b>minimum of 60 characters</b> and should cover the key points like <b>size, color, quantity, material type, etc.</b></p>
                <p>•	    The main <b>image</b> should have a <b>clear white background</b>. You need to provide <b>6 other images</b> that cover a product from <b>different angles</b>. It is also essential that the images must not contain any contact details, website name or a copyright mark by another entity.</p>
                <p>•	    Insert <b>proper keywords</b> in the content to make it SEO and search engine friendly.</p>
                <p>•	    Make sure you sell the product at <b>competitive prices</b> and keep the shipping charges reasonable.</p>
                <p>•	    Add a <b>product description</b> and specification wherever required.</p>
                <p>•	    The <b>features</b> should be restricted to 3-4 main bullet points</p>
                <p>•	    Offer a wide variety of products</p>
                <p>•	    Do not send too many attachments to the consumers</p>
                <p>•	    Avoid sending too many promotional emails or messages</p>
                <p>•	    Be prompt in replying to buyer inquiries</p>
                <p>•	    Do not lie to the customer regarding the availability of goods, it’s delivery or anything else as it may tarnish your reputation</p>
                <p>•	    Use Beldara.com regularly and check your account multiple times a day.</p>
                <p>•	    Consider buying our <a href="https://beldara.com/membership.html">membership packages</a> to boost your visibility on Beldara.com</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button id="How_to_advertise_my_product_on_Beldara.com" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Three" aria-expanded="false" aria-controls="Three" onclick="submit(this)">
                    Q: How to advertise my product on Beldara.com?
                </button>
            </h5>
        </div>
        <div id="Three" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
                <p>There are multiple ways of promoting your product or specific products on Beldara.com. You can promote the products as sponsored products that appear at the top when a user searches for a relevant product on Beldara.com. You can also ensure that your product is displayed on the right-hand side of the page to get customer attention. We can also highlight you as a star seller or trusted seller as a part of our add-on services. All these advertising methods would cost you and are usually valued for money as they help in generating genuine leads and help you to increase sales and get maximum ROI.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingFour">
            <h5 class="mb-0">
            <input type="hidden" id="manageinqueiry" value="Q: How to manage buyers’ inquiries on Beldara.com?" />
                <button id="How_to_manage_buyers_inquiries_on_Beldara.com" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Four" aria-expanded="false" aria-controls="Four" onClick={() => submit(this)}>
                    Q: How to manage buyers’ inquiries on Beldara.com?
                </button>
            </h5>
        </div>
        <div id="Four" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
            <div class="card-body">
                <p>The process of managing buyer’s inquiries on Beldara.com is easy. You just need to follow the steps mentioned here:</p>
                <p>• 	Read the request carefully and make sure you are competent enough to fulfill the requirement. If not, it’s better to decline at this stage rather than giving false hope. </p>
                <p>•	    Make sure that you respond to every inquiry within 24 hours. </p>
                <p>•	    Make sure you concisely provide all the requested details. No one has the time to read long replies these days. </p>
                <p>•	  	Add a personal signature on the replies including business address and contact details to gain the trust of a buyer and prove your authenticity.</p>
                <p>•	  	Make sure you maintain records of every communication with a buyer to avoid miscommunication later on.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingFive">
            <h5 class="mb-0">
            <input type="hidden" id="hotlead" value="Q: What is a hot lead on Beldara.com?" />
                <button id="What_is_a_hot_lead_on_Beldara.com" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Five" aria-expanded="false" aria-controls="Five" onClick={() => submit(this)}>
                    Q: What is a hot lead on Beldara.com?
                </button>
            </h5>
        </div>
        <div id="Five" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
            <div class="card-body">
                <p>A hot lead is a lead offered to sellers by Beldara.com. When a prospective buyer sends a purchase requirement, a team of Beldara.com reviews it and offers it in the form of hot leads to relevant suppliers. To access these hot leads the seller needs to pay a nominal amount and get the contact details of the buyer in exchange. You don’t have to respond to every hot lead, you can choose the ones you like best. Hot leads save the time of a seller that is spent on going through the Beldara.com website to find relevant inquiries. They also give a seller an opportunity to increase sales and expand the bus. </p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingSix">
            <h5 class="mb-0">
                <button id="How_do_I_pay_with_Beldara.com" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Six" aria-expanded="false" aria-controls="Six" onClick={() => submit(this)}>
                    Q: How do I pay with Beldara.com?
                </button>
            </h5>
        </div>
        <div id="Six" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
            <div class="card-body">
                <p>You have the option of accessing BDP- Beldara Pay when you join Beldara.com. To avail this option, you just need to get your KYC done. We urge all buyers and sellers to make use of BDP because it's secure and ensures you get the payment or send it successfully. To do the KYC, we need your PAN, IFSC code, bank account, and other relevant details. All the sensitive data will be highly protected by Beldara.com. You need to know that you have to pay a nominal fee to maintain the account and on every transaction. We do incentives to connect to BDP to new sellers and buyers.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingSeven">
            <h5 class="mb-0">
                <button id="What_are_PPRs_(Product_Performance_Reports)" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Seven" aria-expanded="false" aria-controls="Seven" onClick={() => submit(this)}>
                    Q: What are PPR’s (Product Performance Reports)?
                </button>
            </h5>
        </div>
        <div id="Seven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
            <div class="card-body">
                <p>Product performance reports are reports supplied by Beldara.com to the sellers. They help a seller to know what a customer is expecting from the sellers. For instance, which of the products are being looked at by the buyers, which products are getting no attention, what kind of buyers are looking at the products, etc. These reports help a seller to improve its visibility on Beldara.com, and this service is paid. You can make the most of this service by accessing these reports regularly and creating relevant strategies based on the reports. For instance, if a product is getting a lot of attention from the buyers, you might want to reduce its price or offer a discount to make the buyer buy the product. </p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingNine">
            <h5 class="mb-0">
                <button id="What_to_Do_If_I_Have_Received_an_Irrelevant_Lead" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Nine" aria-expanded="false" aria-controls="Nine" onClick={() => submit(this)}>
               Q: Support –What to Do If I Have Received an Irrelevant Lead?
                </button>
            </h5>
        </div>
        <div id="Nine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
            <div class="card-body">
                <p>	Make sure that the quality of your <a href="https://uat.beldara.com/product_listing_guideline.html">product listing</a> is high and you are making the use of the right keywords, content, and images. </p>
                <p>The process of managing buyer’s inquiries on Beldara.com is easy. You just need to follow the steps mentioned here:</p>
                <p>• 		Check whether you have all the products sorted by relevance. </p>
                <p>•	    	In case you don’t want to deal with certain products, it is recommended that you remove them from your store, even a slight mention of such products can harm the quality of the leads. </p>
                <p>•	   	Focus on the product name and make sure that they are relevant and worthy of appearing in relevant searched made by the buyers. </p>
                <p>•	  	Crosscheck whether the product description and images are as per the <a href="https://uat.beldara.com/product_listing_guideline.html">guideline</a> prescribed by Beldara.com.</p>
                <p>•	  	See to it that you are providing exact pricing details of most of the products (possibly all) because products with pricing details get a higher rank on Beldara.com than the products whose pricing details are not mentioned. </p>
                <P>•       	In case you are willing to make some investment to get better quality leads, consider the <a href="https://uat.beldara.com/membership.html">paid services</a> offered by Beldara.com that will increase your listing and visibility on Beldara.com.</P>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingTen">
            <h5 class="mb-0">
                <button id="What_Can_be_Done_If_a_Buyer_Hasn’t_Responded_to_the_Quotation_I_Sent" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Ten" aria-expanded="false" aria-controls="Ten" onClick={() => submit(this)}>
               Q: What Can be Done If a Buyer Hasn’t Responded to the Quotation I Sent?
                </button>
            </h5>
        </div>
        <div id="Ten" class="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
            <div class="card-body">
                <p>• 		As a supplier, it is highly recommended that you follow up with the buyer to make sure that the buyer remembers you. In case the buyer is considering you and many other options, it might motivate the buyer to move a bit forward in your direction. You can also use the follow up to offer value-added services or negotiate further to attract the buyer in your direction. All these strategies might help in the conversion of the lead and close on the deal.  </p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingEleven">
            <h5 class="mb-0">
                <button id="I_Dont_Like_Getting_Retail_Enquiries_Why_Is_It_Happening" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Eleven" aria-expanded="false" aria-controls="Eleven" onClick={() => submit(this)}>
               Q: I Don’t Like Getting Retail Enquiries, Why Is It Happening?
                </button>
            </h5>
        </div>
        <div id="Eleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample">
            <div class="card-body">
                <p>• 		Some sellers get retail inquiries if they had not mentioned minimum order quantity against each of the products in the catalog. Once you set a higher limit there, you will stop receiving low-quality buyer requirements and only get bulk requirements from the buyers. </p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingTweleve">
            <h5 class="mb-0">
                <button id="I_Have_Not_Received_a_Quick_Response_from_the_Buyer_What_are_My_Options_Now" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Tweleve" aria-expanded="false" aria-controls="Tweleve" onClick={() => submit(this)}>
               Q: I Have Not Received a Quick Response from the Buyer. What are My Options Now?
                </button>
            </h5>
        </div>
        <div id="Tweleve" class="collapse" aria-labelledby="headingTweleve" data-parent="#accordionExample">
            <div class="card-body">
                <p>• 		Whenever you want the buyer to respond quickly, you must follow these suggestions: </p>
                <p>• 			Make sure that you are offering complete details of your business, including certifications.  </p>
                <p>• 			See to it that you have shared the right images, content, prices and contact details. </p>
                <p>• 			Ensure that you answer to all buyer inquiries promptly.  </p>
                <p>• 			Make use of Beldara.com’s Seller Panel, to send personalized messages and quotations to the buyers.  </p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="Thirteen">
            <h5 class="mb-0">
                <button id="What_is_the_Process_of_Creating_a_Quotation_for_a_Buyers_Benefit" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Thirteen" aria-expanded="false" aria-controls="Thirteen" onClick={() => submit(this)}>
               Q: What is the Process of Creating a Quotation for a Buyer’s Benefit?
                </button>
            </h5>
        </div>
        <div id="Thirteen" class="collapse" aria-labelledby="headingThirteen" data-parent="#accordionExample">
            <div class="card-body">
                <p>• 	The process is very simple and is divided into steps over here.  </p>
                <p>• 		    Start by clicking on the quotation icon after signing into your seller account.  </p>
                <p>•    	    Once you click, the details of the inquiry will be taken from the catalog. </p>
                <p>• 			You are free to add more products by using the “Add Product” button. </p>
                <p>• 			Once done, you should click on the Next icon.  </p>
                <p>• 			Then you should share the terms & conditions associated with the deal.  </p>
                <p>•    		After that, you should recheck everything and click on generate a quotation </p>
                <p>• 			When you do that, you will get a preview of the quotation where you can again cross check everything. </p>
                <p>• 			If you want to change anything, click on the Modify Your Quotation icon.  </p>
                <p>• 	    	If everything seems nice, just click on Send Quotation.  </p>
                <p>• 	    	As soon as you do that, the quotation will be sent to the buyer via email, SMS and even app notification. </p>                                                 
            </div>
        </div>
    </div>
                <div class="card">
        <div class="card-header" id="headingFourteen">
            <h5 class="mb-0">
                <button id="Will_a_Buyer_Contact_Me_(The_Seller)_Once_I_Have_Sent_the_Quotation" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#Fourteen" aria-expanded="false" aria-controls="Fourteen" onClick={() => submit(this)}>
               Q: Will a Buyer Contact Me (The Seller) Once I Have Sent the Quotation?
                </button>
            </h5>
        </div>
        <div id="Fourteen" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
            <div class="card-body">
                <p>• 	As buyers receive notifications from multiple sellers via multiple channels, the buyer might not contact you. It is strongly recommended that you follow up with the buyer and mention how you are better than other sellers to motivate the buyer to close the deal.  </p>                                                 
            </div>
        </div>
    </div>
</div>
</div>
        )};
}

export default FaqSeller;