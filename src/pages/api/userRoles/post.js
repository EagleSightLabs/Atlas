import dbConnect from '@/utils/dbConnect';
import UserRole from '@/models/UserRole';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const userRole = await UserRole.create(req.body);
    res.status(201).json({ success: true, data: userRole });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
