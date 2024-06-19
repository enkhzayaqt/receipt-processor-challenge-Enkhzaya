const calculatePoints = (receipt) => {
    let points = 0;

    // One point for every alphanumeric character in the retailer name.
    points += receipt.retailer.replace(/[^a-zA-Z0-9]/g, '').length;

    // 50 points if the total is a round dollar amount with no cents.
    const total = parseFloat(receipt.total);
    if (total === Math.floor(total)) {
        points += 50;
    }

    // 25 points if the total is a multiple of 0.25.
    if (total % 0.25 === 0) {
        points += 25;
    }

    // 5 points for every two items on the receipt.
    points += Math.floor(receipt.items.length / 2) * 5;

    // If the trimmed length of the item description is a multiple of 3, 
    // multiply the price by 0.2 and round up to the nearest integer. The result is the number of points earned.
    receipt.items.forEach(item => {
        const trimmedLength = item.shortDescription.trim().length;
        if (trimmedLength % 3 === 0) {
            const price = parseFloat(item.price);
            points += Math.ceil(price * 0.2);
        }
    });

    // 6 points if the day in the purchase date is odd.
    const date = new Date(receipt.purchaseDate);
    if (date.getDate() % 2 === 1) {
        points += 6;
    }

    // 10 points if the time of purchase is after 2:00pm and before 4:00pm.
    const [hour, minute] = receipt.purchaseTime.split(':').map(Number);
    if (hour >= 14 && hour < 16) {
        points += 10;
    }

    return points;
};

module.exports = { calculatePoints };
