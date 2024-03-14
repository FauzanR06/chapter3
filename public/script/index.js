import students from "./students.js";

const studentCard = document.getElementById("student-card");
const searchInput = document.getElementById("search-input");
const searchSubmit = document.getElementById("search-submit");
// get student
async function getStudents(name) {
  const studentsData = await students.getStudentsData(name);
  console.log(studentsData);
  let studentsDataInCards = "";
  studentsData.map((student) => {
    studentsDataInCards += `<div class="col-md-4">
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                ${student.address.city}, ${student.address.province}
              </h6>
            </div>
          </div>
        </div>
    `;
  });
  studentCard.innerHTML = studentsDataInCards;
}
searchSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = searchInput.value;
  getStudents(name);
});
getStudents("");
