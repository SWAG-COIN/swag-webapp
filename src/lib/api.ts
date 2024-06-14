const API_URL = "http://121.127.33.80:5000";

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


export const getWinStatus = async (walletAddress: string) => {
    try {
      if (!walletAddress) throw new Error("Please connect wallet");
      const response = await fetch(`${API_URL}/winner/${walletAddress}`, {
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
  