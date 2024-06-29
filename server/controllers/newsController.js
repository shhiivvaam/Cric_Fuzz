const News = require('../models/News');

const getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createNews = async (req, res) => {
    const { title, content, author } = req.body;

    const newNews = new News({
        title,
        content,
        author,
    });

    try {
        const savedNews = await newNews.save();
        res.json(savedNews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllNews, createNews };
