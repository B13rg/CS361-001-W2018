const axios = require("axios");

console.log("Loading Post Tables")
console.log("--------------------------------------------")

axios
  .get("http://aidangrimshaw.pythonanywhere.com/Posts/New")
  .then(response => {
    if (response.data[0]){
      console.log("New Posts")
      console.log('\x1b[32m%s\x1b[0m',"Success: ",response.data.length+" posts loaded")
    }
  })
  .catch(error => {
    console.log("New Posts")
    console.log('\x1b[31m%s\x1b[0m',"Fail")
  });

axios
  .get("http://aidangrimshaw.pythonanywhere.com/Posts/Top")
  .then(response => {
    if (response.data[0]){
      console.log("Top Posts")
      console.log('\x1b[32m%s\x1b[0m',"Success: ",response.data.length+" posts loaded")
    }
  })
  .catch(error => {
    console.log("Top Posts")
    console.log('\x1b[31m%s\x1b[0m',"Fail")
  });

axios
  .get("http://aidangrimshaw.pythonanywhere.com/Posts/Hot")
  .then(response => {
    if (response.data[0]){
      console.log("Hot Posts")
      console.log('\x1b[32m%s\x1b[0m',"Success: ",response.data.length+" posts loaded")
    }
  })
  .catch(error => {
    console.log("Hot Posts")
    console.log('\x1b[31m%s\x1b[0m',"Fail")
  });

  axios
    .post("https://aidangrimshaw.pythonanywhere.com/Posts/1/1")
    .then(response => {
      if (response.data.status === "success")
      {
        console.log("Voting on post")
        console.log("--------------------------------------------")
        console.log("Upvote")
        console.log('\x1b[32m%s\x1b[0m',"Success: ","post 1 upvoted")
      }
    })
    .catch(error => {
      console.log("Voting on post")
      console.log("--------------------------------------------")
      console.log("Upvote")
      console.log('\x1b[31m%s\x1b[0m',"Fail")
    });
  axios
    .post("https://aidangrimshaw.pythonanywhere.com/Posts/1/0")
    .then(response => {
      if (response.data.status === "success")
      {
        console.log("Downvote")
        console.log('\x1b[32m%s\x1b[0m',"Success: ","post 1 downvoted")
      }
    })
    .catch(error => {
      console.log("Downvote")
      console.log('\x1b[31m%s\x1b[0m',"Fail")
    });
