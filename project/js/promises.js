let p = new Promise(function (resolve, reject) {
  reject("Unsuccessfully executed!");
});

p.then(function (res) {
  console.log(res);
})
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("Always execute");
  });
