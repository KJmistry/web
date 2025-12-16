// js/feedback.js

// Dummy feedback data
const dummyFeedbacks = [
    { reviewer: "Alice W.", message: "Love the exotic collection, truly unique pieces!" },
    { reviewer: "Brian K.", message: "Customer service was very helpful and responsive." },
    { reviewer: "Catherine L.", message: "The quality is amazing. Will buy again." },
    { reviewer: "Daniel M.", message: "Fast shipping and well-packaged items." },
    { reviewer: "Emily R.", message: "Beautiful products, highly recommend!" },
    { reviewer: "Frank T.", message: "Great experience overall, keep it up!" },
    { reviewer: "Grace S.", message: "Impressed with the variety and uniqueness." },
    { reviewer: "Henry P.", message: "Packaging could be improved but products are excellent." },
    { reviewer: "Isabel J.", message: "Five stars! Amazing quality and service." }
];

// Get container
const container = document.getElementById("feedbackContainer");

// Function to generate random positions and rotations
function getRandomStyle() {
    const top = Math.random() * 400; // vertical position
    const left = Math.random() * (container.clientWidth - 250); // horizontal position
    const rotate = (Math.random() - 0.5) * 10; // rotate between -5 to 5 degrees
    const delay = Math.random() * 3; // animation delay in seconds
    return `top:${top}px; left:${left}px; transform: rotate(${rotate}deg); animation-delay:${delay}s;`;
}

// Render feedback cards
dummyFeedbacks.forEach(feedback => {
    const card = document.createElement("div");
    card.className = "feedback-card animate";
    card.style = getRandomStyle();
    card.innerHTML = `
        <div class="reviewer">${feedback.reviewer}</div>
        <div class="message">${feedback.message}</div>
    `;
    container.appendChild(card);
});
