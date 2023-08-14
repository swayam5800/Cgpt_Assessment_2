import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import './SubscriptionForm.css';

const SubscriptionForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscription = async (planId) => {
    setLoading(true);

    // Load Stripe
    const stripe = await loadStripe(
      "pk_test_51NernDSFIW82Qf9YDr5ch4JyCklBoLTAcpIObUFWMkCu79l7Qe7aiF0xnMfzwTzi7zjzDeNDM5jsEJXYqlPokzPY00l2kmqAre"
    );

    // Creating a PaymentIntent on backend for the selected plan
    const response = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ planId }),
    });

    const { clientSecret } = await response.json();

    // Confirm the PaymentIntent with Stripe
    const result = await stripe.confirmCardPayment(clientSecret);

    if (result.error) {
      console.error(result.error.message);
      setLoading(false);
    } else {
      <p>Congratulations! Payment was successful.</p>
    }
  };

  const SubscriptionPlanButton = ({ planId, label, price }) => (
    <div className="subscription-plan">
      <h3>{label}</h3>
      <p>{price}</p>
      <button onClick={() => handleSubscription(planId)} disabled={loading}>
        {loading ? "Processing..." : "Subscribe"}
      </button>
    </div>
  );

  return (
    <div className="subscription-container">
      <h2>Choose a Subscription Plan</h2>
      <div className="subscription-plans">
        <SubscriptionPlanButton
          planId="free"
          label="1 Post per Day - Free"
          price="Free"
        />
        <SubscriptionPlanButton
          planId="3-posts"
          label="3 Posts per Day"
          price="$3/month"
        />
        <SubscriptionPlanButton
          planId="5-posts"
          label="5 Posts per Day"
          price="$5/month"
        />
        <SubscriptionPlanButton
          planId="10-posts"
          label="10 Posts per Day"
          price="$10/month"
        />
      </div>
    </div>
  );
};

export default SubscriptionForm;
