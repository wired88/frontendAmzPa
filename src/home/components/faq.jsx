import {useEffect} from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "FAQ",
  rows: [
    {
      title: "What is Affiliate Marketing?",
      content: "Affiliate marketing is like a virtual referral. \n" +
        "Imagine recommending a great product to a friend and getting a reward from the manufacturer. \n" +
        "That's basically how it works - we recommend products and get a commission for it \n" +
        "when someone buys through our link."
    },
    {
      title: "How do we choose the products we promote?",
      content: "We choose the products we promote based on Amazon reviews. " +
        "This way we make sure that we recommend products that have been well rated by other customers."
    },
    {
      title: "Does affiliate marketing have an impact on the price customers pay?",
      content: "NO. As an official partner of the Amazon Affiliate Program, we profit from every purchase made through \n" +
        "our affiliate links by receiving a small commission from Amazon. However, this has NO influence on \n" +
        "the price you pay for your product."
    },
    {
      title: "What happened if I click on a Link?",
      content: "If you click on a link you will directly redirected to the Product on the official Amazon-Website."
    },
    {
      title: "How do we protect the privacy of our customers?",
      content: "Privacy has a high priority in our company. \n" +
        'We have summarized the information on data protection for you <a class="faq_anchor" href="/privacy-policy">here</a>'
    },
    {
      title: 'How can i contact you?',
      content: 'Of course, we attach great importance to the satisfaction of our customers. \n' +
        'Please do not hesitate to contact us with any concerns via the <a class="faq_anchor" href="/contact">contact form</a> or directly by E-Mail: "info@sales-detective.live". \n' +
        "A member of our team will contact you as soon as possible."
    }
  ]
}

function FAQ() {
  useEffect(() => {
    document.title = 'FAQ';
  }, []);

  return (
    <div className={"faq_container"}>
      <Faq data={data}/>
    </div>
  );
}
export default FAQ;