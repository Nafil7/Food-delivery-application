function toggleMenu() {
    document.getElementById("side-menu").style.width = "250px"; // Open menu
}

function closeMenu() {
    document.getElementById("side-menu").style.width = "0"; // Close menu
}

function toggleSuggestions() {
    const suggestions = document.getElementById("suggestions-bar");
    if (suggestions.style.display === "block") {
        suggestions.style.display = "none";
    } else {
        suggestions.style.display = "block";
    }
}

function showFoods(category) {
    const foodData = {
        indian: [
            "Paneer Butter Masala",
            "Chicken Tikka",
            "Biryani",
            "Samosa",
            "Butter Naan"
        ],
        chinese: [
            "Spring Rolls",
            "Kung Pao Chicken",
            "Sweet and Sour Pork",
            "Dumplings",
            "Chow Mein"
        ],
        american: [
            "Burger",
            "Hot Dog",
            "Chicken Wings",
            "Mac and Cheese",
            "Apple Pie"
        ]
    };

    const dropdownContent = document.querySelector(`.suggestion-item[data-category="${category}"] .dropdown-content`);
    dropdownContent.innerHTML = '';

    // Add new suggestions based on the selected category
    foodData[category].forEach(food => {
        const foodItem = document.createElement('a');
        foodItem.href = '#';
        foodItem.textContent = food;
        dropdownContent.appendChild(foodItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const dropdownContent = event.target.nextElementSibling;
            const isVisible = dropdownContent.style.display === 'block';
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none'; // Hide all dropdowns
            });
            dropdownContent.style.display = isVisible ? 'none' : 'block'; // Toggle current dropdown
        });
    });

    // Set event listeners for cuisine buttons
    const cuisineItems = document.querySelectorAll('.suggestion-item');
    cuisineItems.forEach(item => {
        const category = item.getAttribute('data-category');
        item.querySelector('.dropdown-btn').addEventListener('click', () => {
            showFoods(category);
        });
    });
});
