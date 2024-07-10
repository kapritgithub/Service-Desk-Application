// public/assets/js/razorpay.js
const makePayment = () => {
    const options = {
        "key": "YOUR_RAZORPAY_KEY",
        "amount": "50000", // Amount in paise (50000 paise = INR 500)
        "currency": "INR",
        "name": "Service Desk",
        "description": "Ticket Payment",
        "handler": function (response) {
            alert("Payment successful: " + response.razorpay_payment_id);
        },
        "prefill": {
            "name": "Your Name",
            "email": "your-email@example.com"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
};
