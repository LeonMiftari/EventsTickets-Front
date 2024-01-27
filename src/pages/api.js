const apiUrl = 'http://localhost:9494/api';
const api = {
  buyTickets: async (ticketData) => {
    try {
      const response = await fetch(`${apiUrl}/event/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketData),
      });

      if (response.ok) {
        const responseData = await response.json();
        return { success: true, data: responseData };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.message || 'Failed to buy tickets' };
      }
    } catch (error) {
      return { success: false, error: 'Error occurred while processing the request' };
    }
  },
};

export default api;
