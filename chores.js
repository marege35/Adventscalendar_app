const chores = [
    "Make your bed", "Organize your toys", "Dust a room", "Sweep the floor",
    "Water the plants", "Wipe the kitchen table", "Put away your laundry",
    "Set the table for dinner", "Empty the trash bins", "Clean up your study area",
    "Match socks and put them away", "Help load the dishwasher",
    "Help unload the dishwasher", "Vacuum one room", "Clean a window",
    "Pick up items from the floor in a room", "Fold a towel or clothes",
    "Donate your toys", "Help prepare a simple snack", "Help sort recycling",
    "Straighten up the shoes at the door", "Help pack lunch boxes",
    "Write Christmas cards", "Write or draw a thank-you note"
];

const today = new Date().getDate();
const calendarGrid = document.getElementById("calendar-grid");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const choreText = document.getElementById("chore-text");

// Create the advent calendar grid
for (let i = 1; i <= 24; i++) {
    const window = document.createElement("div");
    window.className = "window";
    window.textContent = i;

    if (i < today) {
        // Lock past days as "missed"
        window.classList.add("locked");
        window.addEventListener("click", () => alert(`🎅 You missed Day ${i}!`));
    } else if (i === today) {
        // Make today's window clickable
        window.addEventListener("click", () => openWindow(i - 1, window));
    } else {
        // Lock future days
        window.classList.add("locked");
    }

    calendarGrid.appendChild(window);
}

// Open the modal and display the chore
function openWindow(index, window) {
    const chore = chores[index];
    window.classList.add("opened");
    choreText.textContent = `🎄 Day ${index + 1}: ${chore}`;
    modal.style.display = "flex"; // Show the modal
}

// Close the modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
 