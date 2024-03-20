/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Import the functions you need from the SDKs you need
const functions = require("firebase-functions");
// ... 여기에 여치니의 다른 import 문장들이 있을 수 있어요 ...

// OpenAI API 키를 가져옵니다.

// 여기에 여치니의 함수 코드들이 있을 거예요
exports.yourFunction = functions.https.onRequest((request, response) => {
});
// 여기에 요청을 처리하는 코드... OPENAI_API_KEY 변수를 사용합니다;

// Create and deploy your first functions;
// https://firebase.google.com/docs/functions/get-started;

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
