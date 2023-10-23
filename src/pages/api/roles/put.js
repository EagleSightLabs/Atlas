import dbConnect from '@/utils/dbConnect';
import Role from '@/models/Role';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    const role = await Role.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!role) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: role });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
