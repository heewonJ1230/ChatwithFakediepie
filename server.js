import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // 환경 변수에서 API 키 로드

app.use(express.json());
app.use(express.static('public')); // 'public' 폴더의 정적 파일 제공

app.post('/api/openai', async (req, res) => {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});
// 정적 파일 제공을 위한 미들웨어 (예: public 폴더에 있는 파일)
app.use(express.static('public'));

// 루트 경로에 대한 GET 요청 처리
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    res.send('Welcome to the server!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
