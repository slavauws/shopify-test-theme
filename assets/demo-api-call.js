async function fetchCatFact() {
    try {
    const response = await fetch('https://catfact.ninja/fact');
    
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Cat Fact:', data.fact);
    return data.fact;
    } catch (error) {
    console.error('Error fetching cat fact:', error);
    return null;
    }
    }
    
    // Example usage: fetch and log a cat fact
    fetchCatFact().then(fact => {
    if (fact) {
    console.log('Successfully fetched cat fact:', fact);
    } else {
    console.log('Failed to fetch cat fact');
    }
    });