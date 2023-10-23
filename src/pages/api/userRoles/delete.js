import dbConnect from '@/utils/dbConnect';
import UserRole from '@/models/UserRole';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    const deletedUserRole = await UserRole.deleteOne({ _id: id });
    if (!deletedUserRole) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
