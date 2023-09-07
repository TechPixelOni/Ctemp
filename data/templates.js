// Sample template data
const templates = [
  {
    group: "concierge-service",
    title: "Needs warranty assistance",
    content:
      "Okay, so I would be happy to assist, but this would be outside of my scope of what I can do. You would need to contact our concierge service team.",
  },
  {
    group: "agent-transfer",
    title: "Chat transfer",
    content:
      "It will get you transferred now. It will say that I have disconnected; this would be for the next agent to connect you to your chat.",
  },
  {
    group: "price-matching",
    title: "Other retailer price match",
    content:
      "If you are wanting to price match with another company, unfortunately, we do not. If you purchased something online and see that the price has dropped and you purchased that item 30 days prior, we can adjust the price to the new one.",
  },
  {
    group: "delivery-timeframe",
    title: "2-hour delivery timeframe",
    content:
      "You would be able to see this on the tracking you received. But the evening before your delivery, you will receive a call from our automated system with a 2-hour time frame for the delivery of your merchandise. This tracking would also be updated with the timeframe around this time as well. The default time would be 7 - 10 PM; this would not be the timeframe if you use the tracking on this order.",
  },
  {
    group: "local-warehouse-purchase",
    title: "Costco warehouse purchase",
    content:
      "Hello, I would be happy to assist today. But unfortunately, you would need to visit your local warehouse for assistance with a purchase that was done in a warehouse. I unfortunately do not have any access to the systems they would use to assist you with this.",
  },
  {
    group: "close-chat",
    title: "Chat closing. Additional assistance",
    content:
      "I do apologize and hope this gets solved. If there is anything else I can help with, though, I would gladly assist.",
  },
  {
    group: "order-replacement",
    title: "Lost order RA request",
    content:
      "Okay, I have submitted a request for this to be replaced. Once this is accepted, our returns would look into the situation. This will take two days and once this concludes, they would be creating a new order. This order when created and ships, you would receive confirmation of shipment with the new tracking via email.",
  },
  {
    group: "verification-issue",
    title: "Unable to verify",
    content:
      "Okay, I could not verify the information that was provided. I am no longer able to attempt to assist here. I would double-check the information that you have used for this order and chat or call back at a later time. If you have any questions that would not be related to this order or account that this was placed on, I would be happy to assist.",
  },
  {
    group: "close-chat",
    title: "Holiday Closing",
    content:
      "Great, I am glad that I was able to help. I do hope that you have great holidays.",
  },
  {
    group: "membership-department",
    title: "Template 10 ",
    content:
      "Okay, for this, I would need to get you to our membership department. They should be able to help since this is something that the warehouse does. I do apologize I am unable to assist.",
  },
  {
    group: "lost-item-resolution",
    title: "Template 11",
    content:
      "Thank you. So based on how long this has been shown to not be moving, this could be considered lost, but delays can take this long. So I can look into getting an exchange order requested or even a refund for the lost item.",
  },
  {
    group: "lost-item-resolution",
    title: "Template 12",
    content:
      "Okay, seeing that this was marked as delivered, I would be able to request two things here. This can be requested an exchange or refund for the lost item.",
  },
  {
    group: "incident-reference",
    title: "Template 13",
    content: "$incidents.ref_no",
  },
  {
    group: "order-replacement",
    title: "Template 14",
    content:
      "Okay, I am submitting this request for a new order. This should be created within two days after our returns team traces the lost item. You will be notified once shipped. This will be an email confirmation that will include tracking for the new order.",
  },
  {
    group: "greetings",
    title: "Greetings",
    content:
      "Hi there $contacts.name.first!! I do apologize about this issue. I'd be more than happy to assist you today. So thank you for reaching out to Costco Member Service for assistance. I wanna ask how is your day today? while I get everything pulled up.",
  },
  {
    group: "order-verification",
    title: "Template 16",
    content:
      "Just one last thing, could you verify one of the item's name or brand on your order for me so that I know I am looking at the correct order?",
  },
  {
    group: "delivery-rescheduling",
    title: "Template 17",
    content:
      "This is set for delivery tomorrow. A bunch of times these are already loaded on the truck. Rescheduling it means the item takes a tour of the local area for free, getting a chance for bumps and bruises. We really encourage our members to keep the delivery appointments.",
  },
  {
    group: "self-service-options",
    title: "Template 18",
    content:
      "Thank you. Before submitting a request, I will want to advise you of the self-service options available. Have you created an account online for this order?",
  },
  {
    group: "return-request",
    title: "Template 19",
    content:
      "Okay, so if you do decide to return, once we verify the return, we will send you a UPS label to return the merchandise. This will not be an overnight process.",
  },
  {
    group: "shipping-address-verification",
    title: "Template 20",
    content:
      "It looks like the order was attempted to be shipped to $order.shipping_address. The shipper attempted delivery on $order.delivery_date, but it was not successful. Would you like to verify or change the shipping address?",
  },
  {
    group: "missed-chat",
    title: "Template 21",
    content:
      "I apologize for any inconvenience, but it seems you missed our chat. If you have any further questions or need assistance, please feel free to start a new chat with us.",
  },
  {
    group: "order-resolution",
    title: "Template 22",
    content:
      "Okay, so if you ordered a vacuum and you received a monitor, that would mean this order was mixed up somewhere. For this situation, I would advise not to return this item to the local warehouse; this could cause more issues than good. We will need to create an exchange order for this item.",
  },
  {
    group: "shipping-address-verification",
    title: "Template 23",
    content:
      "It appears that your order was scheduled to be delivered to $order.shipping_address, but the delivery was unsuccessful. Would you like to verify or update the shipping address for this order?",
  },
  {
    group: "technical-issue",
    title: "Template 24",
    content:
      "I apologize for any technical issues you're experiencing. To better assist you, could you please describe the technical issue you're encountering? This will help me provide the most accurate guidance.",
  },
  {
    group: "placeholder",
    title: "Template 25",
    content: "This is a placeholder template.",
  },
  {
    group: "account-information",
    title: "Account help // WIP",
    content:
      "Hello, $contacts.name.first! I'm here to assist you with your account information. Please provide me with any details or questions you have related to your account, and I'll do my best to help.",
  },
  {
    group: "holiday-greetings",
    title: "Template 27",
    content: "Wishing you joyful holidays and a happy new year!",
  },
  {
    group: "general-assistance",
    title: "Template 28",
    content:
      "I'm here to provide general assistance. How may I assist you today?",
  },
  {
    group: "agent-transfer",
    title: "Template 29",
    content:
      "I'm transferring you to another agent who can assist you further with your request. Please hold for a moment.",
  },
  {
    group: "email-troubleshooting",
    title: "Template 30",
    content:
      "To troubleshoot email issues, let's start by checking a few things. Please provide me with the email service provider you're using (e.g., Gmail, Outlook), and describe the specific problem you're encountering.",
  },
  {
    group: "order-status",
    title: "Template 31",
    content:
      "I can help you check the status of your order. Please provide me with the order number, and I'll look it up for you.",
  },
  {
    group: "membership-assistance",
    title: "Template 32",
    content:
      "If you have any questions or need assistance related to your Costco membership, please feel free to ask. I'm here to help!",
  },
  {
    group: "agent-transfer",
    title: "Template 33",
    content:
      "I'm transferring you to another agent who specializes in your specific request. Please hold for a moment.",
  },
  {
    group: "order-cancellation",
    title: "Template 34",
    content:
      "If you wish to cancel your order, please provide me with the order number, and I'll assist you in processing the cancellation request.",
  },
  {
    group: "order-replacement",
    title: "Template 35",
    content:
      "I'm here to assist you with the replacement of your order. Please provide me with the order number, and I'll initiate the process for you.",
  },
  {
    group: "account-information",
    title: "Template 36",
    content:
      "Hello again! If you have any further questions or need assistance with your account, please let me know. I'm here to help with your account information.",
  },
];

// Export the template data
function getTemplates() {
  return templates;
}
