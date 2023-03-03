var fileInput = document.getElementById("databaseCSV");
const batchYear = 2024;

const processData = (results, batchYear) => {
  let dataArr = [];
  let outerObj = new Object();
  outerObj.batchId = "batch" + batchYear;
  let resultArr = results.data;
  outerObj.content = resultArr;
  console.log(outerObj);
  axios.post('/updateDatabase', outerObj, {
    headers:{
        updateDatabase: true,
    }
  }).then((res)=>{
    console.log(res);
  })
};

async function convertToJson(){
    let jsonData = await csvtojson({
    "selector": "databaseCSV",
    "delimiter": ","
    });
    processData(jsonData, batchYear);
}

fileInput.addEventListener("change", function (event) {
    convertToJson();
});
