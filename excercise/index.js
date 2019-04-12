const axios = require("axios");

async function getQuizData() {
  const API_URL = "https://opentdb.com/api.php?amount=10";
  try {
    const response = await axios.get(API_URL);
    const results = await response.data.results;
    console.log("クイズデータ：", results);
  } catch (error) {
    console.log("データの取得に失敗しました。", error.message);
  }
}
getQuizData();
