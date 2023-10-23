import dbConnect from '@/utils/dbConnect';
import Role from '@/models/Role';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const roles = await Role.find({});
    res.status(200).json({ success: true, data: roles });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
