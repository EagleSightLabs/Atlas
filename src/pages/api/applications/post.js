import dbConnect from '@/utils/dbConnect';
import Application from '@/models/Application';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const application = await Application.create(req.body);
    await application.populate('categories').execPopulate();
    res.status(201).json({ success: true, data: application });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
