export default function handler(req, res) {
    if (req.method === 'POST') {
      const { amount, currency, orderId } = req.body;
  
      // Example logic (replace with your payment API call)
      res.status(200).json({
        success: true,
        message: `Payment processed for order ${orderId} of ${amount} ${currency}`,
      });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  