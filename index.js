import axios from "axios";

function main() {
  console.log("test");
  axios
    .get(
      "https://us-south.functions.cloud.ibm.com/api/v1/web/takumiadachi%40gmail.com_dev/get-http-resource/weather.json"
    )
    .then(response => {
      console.log(response.data);
    });

  async function test() {
    const data = await axios.get(
      "https://us-south.functions.cloud.ibm.com/api/v1/web/takumiadachi%40gmail.com_dev/get-http-resource/weather.json"
    );
    return data;
  }

  console.log(
    test().then(response => {
      console.log(response.data);
    })
  );
}

main();
