// Sample template data
const templates = [
  {
    group: "concierge-service",
    title: "Warranty Assistance (outside of 30 days | Parts or installation)",
    content:
      "Okay, so I would be happy to assist, but this would be outside of my scope of what I can do. You would need to contact our concierge service team.",
  },
  {
    group: "concierge-service",
    title: "Warranty (outside of 90 days)",
    content:
      "Okay, so I would be happy to assist, but this would be outside of my scope of what I can do. As this is outside of the return policy for this item. You would need to contact our concierge service team.",
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
    title: "Transfer to membership ",
    content:
      "Okay, for this I would need to get you to our membership department. They should be able to assist as this is related to our membership services. I do apologize I am unable to assist.",
  },
  {
    group: "lost-item-resolution",
    title: "Lost item longer than 48 hours",
    content:
      "Thank you. So based on how long this has been shown to not be moving, this could be considered lost, but delays can take this long. So I can look into getting an exchange order requested or even a refund for the lost item.",
  },
  {
    group: "lost-item-resolution",
    title: "Non-receipt (Not Depts 24, 33, 35 / Non member )",
    content:
      "Okay, seeing that this was marked as delivered, I would be able to request two things here. This can be requested an exchange or refund for the lost item.",
  },
  {
    group: "incident-reference",
    title: "SR number",
    content: "$incidents.ref_no",
  },
  {
    group: "order-replacement",
    title: "Lost item exchange process",
    content:
      "Okay, I am submitting this request for a new order. This should be created within two days after our returns team traces the lost item. You will be notified once shipped. This will be email confirmation that will include tracking for the new order.",
  },
  {
    group: "greetings",
    title: "Greetings",
    content:
      "Hi there $contacts.name.first!! I do apologize about this issue. I'd be more than happy to assist you today. So thank you for reaching out to Costco Member Service for assistance. I wanna ask how is your day today? while I get everything pulled up.",
  },
  {
    group: "order-verification",
    title: "Item verification",
    content:
      "Just one last thing, could you verify one of the item's name or brand on your order for me so that I know I am looking at the correct order?",
  },
  {
    group: "delivery-rescheduling",
    title: "Are you sure you need to reschedule (DOD)",
    content:
      "This is set for delivery tomorrow. A bunch of times these are already loaded on the truck. Rescheduling it means the item takes a tour of the local area for free, getting a chance for bumps and bruises. We really encourage our members to keep the delivery appointments.",
  },
  {
    group: "self-service-options",
    title: " Self service returns",
    content:
      'Thank you. Before submitting a request, I will want to advise you of the self-service options available. Okay, well while you do not have to look into this now.  I would like to provide the article titled "Return or Replace your Costco.com Online Order" on the customer service page. This can be found with this link as well https://customerservice.costco.com/app/answers/detail/a_id/6874  ',
  },
  {
    group: "return-request",
    title: "A UPS label request",
    content:
      "Okay, so if you do decide to return, within 24 to 48 hours, we will send you a UPS label to return the merchandise via email pkginfo@ups.com. This can possibly not be an overnight process. So we do ask that you please print the label within 3 days and to return within 20 days of the return being requested.",
  },
  {
    group: "shipping-address-verification",
    title: "Unable to verify address",
    content:
      'It looks like the order was attempted to be shipped to a address that was not able to be verified. I very much apologize about this. For us  to be able to ship complete a order to a address we would need to be able to confirm three things. That the name is able to be confirmed to be the owner or a resident. The second thing is that it needs to not be a business address and must not be listed as something we are unable to deliver to on this article titled ""  https://customerservice.costco.com/app/answers/detail/a_id/637/kw/shipping%20restriction/related/1 ',
  },
  {
    group: "missed-chat",
    title: "1 + 1 + 1 (Chat missed)",
    content:
      "I apologize for any inconvenience, but it seems you missed our chat. If you have any further questions or need assistance, please feel free to start a new chat with us.",
  },
  {
    group: "order-resolution",
    title: "Received something other than ordered",
    content:
      "Okay, so if you ordered a something and received another item, that would mean this order was mixed up somewhere. For this situation, I would advise not to return this item to the local warehouse; this could cause more issues than good. We will need to create an exchange order or a refund request for this item.",
  },
  {
    group: "shipping-address-verification",
    title: "Carrier advised incorrect address",
    content:
      "It appears that your order was scheduled to be delivered to be delivered, but the delivery was unsuccessful. If possible would you like to verify the address so we can see if this can be attempted again?",
  },
  {
    group: "technical-issue",
    title: "Website issues",
    content:
      "I apologize for any technical issues you're experiencing. To better assist you, could you please describe the technical issue you're encountering? This will help me provide the most accurate guidance.",
  },
  {
    group: "placeholder",
    title: "This is a place holder for test and such",
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
    title: "Holiday greeting",
    content:
      "Hello $contacts.name.first, I want to wish you joyful holidays and a happy new year! Though I am also sorry about issues we caused with this order. So thank you for reaching out so we can assist.",
  },
  {
    group: "general-assistance",
    title: "No member message received",
    content:
      "Hello $contacts.name.first, I'm here to provide assistance for your order today. How may I assist you today?",
  },
  {
    group: "agent-transfer",
    title: "Transfer message (Requires phone call)",
    content:
      "I will need to have you contact another department that can assist you further with your request. Please hold for a moment.",
  },
  {
    group: "email-troubleshooting",
    title: "Troubleshooting email not received",
    content:
      "To troubleshoot email issues, let's start by checking a few things. Please provide me with the email service provider you're using (e.g., Gmail, Outlook), and describe the specific information you're looking for.",
  },
  {
    group: "order-status",
    title: "Order status (No order number)",
    content:
      "I can help you check the status of your order. Please provide me with the order number, and I'll look it up for you.",
  },
  {
    group: "membership-assistance",
    title: "Clarify membership assitance needed",
    content:
      "If you have any questions or need assistance related to your Costco membership, this would be the wrong department, though please feel free to ask. I'm here to help!",
  },
  {
    group: "agent-transfer",
    title: "Transfer department (Chat)",
    content:
      "I'm transferring you to another agent who specializes in your specific request. Please hold for a moment.",
  },
  {
    group: "order-cancellation",
    title: "Cancel order (No order number)",
    content:
      "If you wish to cancel your order, please provide me with the order number, and I'll assist you in processing the cancellation request.",
  },
  {
    group: "order-replacement",
    title: "Request replacement",
    content:
      "I'm here to assist you with the replacement of your order. Please provide me with the order number, and I'll initiate the process for you.",
  },
  {
    group: "account-information",
    title: "Help with Account",
    content:
      "If you have any further questions or need assistance with your account, please let me know. I'm here to help with issues you may have",
  },
];

// Export the template data
function getTemplates() {
  return templates;
}
