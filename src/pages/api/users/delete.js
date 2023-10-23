import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    const deletedUser = await User.deleteOne({ _id: id });
    if (!deletedUser) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
