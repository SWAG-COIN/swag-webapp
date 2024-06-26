const API_URL = "https://swagcoin.duckdns.org/";

export const getTicket = async (walletAddress: string, type: 'week' | 'goal') => {
  try {
    if (!walletAddress) throw new Error("Please connect wallet");
    const response = await fetch(`${API_URL}/account_tickets_${type}/${walletAddress}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json()
    console.log(result);
    
    return Object.values(result);
  } catch (error) {
    console.log(error);
  }
};

export const getTicketHistory = async (walletAddress: string) => {
  try {
    if (!walletAddress) throw new Error("Please connect wallet");
    const response = await fetch(`${API_URL}/ticket_history/${walletAddress}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json()
    console.log(result);
    
    return Object.values(result);
  } catch (error) {
    console.log(error);
  }
};


export const getWinStatus = async (walletAddress: string, type: 'week' | 'goal') => {
    try {
      if (!walletAddress) throw new Error("Please connect wallet");
      const response = await fetch(`${API_URL}/winner_${type}/${walletAddress}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json()
    } catch (error) {
      console.log(error);
    }
  };
  