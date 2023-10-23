import dbConnect from '@/utils/dbConnect';
import Role from '@/models/Role';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    const deletedRole = await Role.deleteOne({ _id: id });
    if (!deletedRole) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
