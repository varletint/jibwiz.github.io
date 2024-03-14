const details_container = document.querySelector(".details-container");

// // const getTasks = async () => {
// //   const taskFromServer = await fetchTasks();
// //   setTasks(taskFromServer);
// // };
// const fetchTasks = async () => {
//   const res = await fetch("time.json");
//   const data = res.json();
//   data.map((time) => {
//     console.log(time);
//   });
//   console.log(data);
// };

// // function setTasks() {
// //   data.map((time) => {
// //     log(time);
// //   });
// // }
// fetchTasks();

// // fetchTasks();

fetch("time.json")
  .then(function (response) {
    return response.json();
    // console.log(data);
  })
  .then(function (data) {
    data = data
      .map(function (item) {
        return `
      <div class="details">
                    <p>${item.salat}</p>
                    <p>${item.time} <span>${item.amPm}</span></p>
                </div>
      `;
      })
      .join("");
    document.querySelector(".details-container").innerHTML = data;
  })
  .catch(function (err) {
    console.log(err);
  });

// const fetchMe = () => {
//   fetch("time.json")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       data = data
//         // console.log(data);
//         // data
//         .map((times) => {
//           return `
//           <div class="details">
//                     <p>${times.salat}</p>
//                     <p>${times.time} <span>${am - pm}</span></p>
//                 </div>
//           `;
//         })
//         .join("");
//       details_container.innerHTML = data;
//     })
//     .catch((err) => alert(err));
// };
// fetchMe();
