import dbConnect from '@/utils/dbConnect';
import Role from '@/models/Role';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const role = await Role.create(req.body);
    res.status(201).json({ success: true, data: role });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
