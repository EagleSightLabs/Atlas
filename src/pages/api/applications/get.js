import dbConnect from '@/utils/dbConnect';
import Application from '@/models/Application';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const applications = await Application.find({}).populate('categories');
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
