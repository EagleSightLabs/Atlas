import dbConnect from '@/utils/dbConnect';
import UserRole from '@/models/UserRole';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const userRoles = await UserRole.find({});
    res.status(200).json({ success: true, data: userRoles });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
