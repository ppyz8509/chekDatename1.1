function getDayName() {
    const inputDate = document.getElementById("dateInput").value;
    const dateObject = moment(inputDate, "YYYY-MM-DD");
    if (!dateObject.isValid() || !dateObject.isSame(inputDate, "day")){
      document.getElementById("result").innerHTML = "Invalid or non-existent date";
      return;
    }
    const dayOfWeek = dateObject.day();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[dayOfWeek];
    document.getElementById("result").innerHTML = `The day name for the input date is: ${dayName}`;
  }