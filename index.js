import axios from "axios";

async function publicGET(url) {
  try {
    const data = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
}

async function test() {
  const data = await axios.get(
    "https://us-south.functions.cloud.ibm.com/api/v1/web/takumiadachi%40gmail.com_dev/get-http-resource/weather.json"
  );
  return data;
}

function main() {
  console.log("test");
  axios
    .get(
      "https://us-south.functions.cloud.ibm.com/api/v1/web/takumiadachi%40gmail.com_dev/get-http-resource/weather.json"
    )
    .then(response => {
      console.log(response.data);
    });

  test().then(response => {
    console.log(response.data);
  });

  publicGET(
    "https://us-south.functions.cloud.ibm.com/api/v1/web/takumiadachi%40gmail.com_dev/ibm-cloudfunctions-example/Hello.json"
  ).then(response => {
    console.log(response.data);
  });
}

main();
