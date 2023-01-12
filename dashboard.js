let courseData = [
    {
      title: "Acceleration",
      isFavourite: true,
      courseImage: "\\quantum-screen-assets\\images\\imageMask.png",
      subject: "Physics",
      grade: {
        baseGrade: 7,
        additionalGrade: 2,
      },
      content: {
        units: 4,
        lessons: 18,
        topics: 24,
      },
      teacher: "Mr. Frank's Class B",
      numberOfStudents: 50,
      date: {
        start: "21-Jan-2020",
        end: "21-Aug-2020",
      },
    },
    {
      title: "Displacement Velocity and Speed",
      isFavourite: true,
      courseImage: "\\quantum-screen-assets\\images\\imageMask-1.png",
      subject: "Physics 2",
      grade: {
        baseGrade: 6,
        additionalGrade: 3,
      },
      content: {
        units: 2,
        lessons: 15,
        topics: 20,
      },
      teacher: "No Classes",
      numberOfStudents: null,
      date: {
        start: null,
        end: null,
      },
    },
    {
      title:
        "Introduction to Biology: Micro organisms and how they affec...",
      isFavourite: true,
      courseImage: "\\quantum-screen-assets\\images\\imageMask-3.png",
      subject: "Biology",
      grade: {
        baseGrade: 4,
        additionalGrade: 1,
      },
      content: {
        units: 5,
        lessons: 16,
        topics: 22,
      },
      teacher: "All Classes",
      numberOfStudents: 300,
      date: {
        start: null,
        end: null,
      },
    },
    {
      title: "Introduction to Highschool Mathematics",
      isFavourite: false,
      courseImage: "\\quantum-screen-assets\\images\\imageMask-2.png",
      subject: "Mathematics",
      grade: {
        baseGrade: 8,
        additionalGrade: 3,
      },
      content: {
        units: null,
        lessons: null,
        topics: null,
      },
      teacher: "Mr. Frank's Class A ",
      numberOfStudents: 44,
      date: {
        start: "14-Oct-2019",
        end: "20-Oct-2020",
      },
    },
  ];
  
  for (let i = 0; i < courseData.length; i++) {
    const card = document.querySelector(".card");
    const course = document.createElement("div");
    course.setAttribute(
      "class",
      "course-" + courseData[i].subject.split(" ").join("") + " grid-item"
    );

    const top = document.createElement("div");
    top.setAttribute("class", "top");

    const image = document.createElement("img");
    image.setAttribute("src", courseData[i].courseImage);
    image.setAttribute("class", "course-image");
    top.appendChild(image);

    const info = document.createElement("div");
    info.setAttribute("class", "info");

    const title = document.createElement("div");
    title.setAttribute("class", "title");

    const name = document.createElement("div");
    name.setAttribute("class", "name");
    name.innerHTML = courseData[i].title;
    title.appendChild(name);

    if (courseData[i].isFavourite) {
      const favourite = document.createElement("img");
      favourite.setAttribute(
        "src",
        "\\quantum-screen-assets\\icons\\favourite.svg"
      );
      favourite.setAttribute("class", "favourite");
      title.appendChild(favourite);
    }

    const subject_grade = document.createElement("div");
    subject_grade.setAttribute("class", "subject-grade");
    subject_grade.innerHTML = courseData[i].subject;

    const wall = `
      <span class="subject-grade-divider">|</span>
    `;

    subject_grade.insertAdjacentHTML("beforeend", wall);

    subject_grade.insertAdjacentText(
      "beforeend",
      "Grade " + courseData[i].grade.baseGrade
    );

    const additionalGrade = document.createElement("span");
    additionalGrade.setAttribute("class", "highlight");
    additionalGrade.innerHTML = " +" + courseData[i].grade.additionalGrade;
    subject_grade.appendChild(additionalGrade);

    const contents = document.createElement("div");
    contents.setAttribute("class", "contents");

    if (courseData[i].content.units != null) {
      const units = document.createElement("div");
      units.setAttribute("class", "units");

      const lessons = document.createElement("div");
      lessons.setAttribute("class", "lessons");

      const topics = document.createElement("div");
      topics.setAttribute("class", "topics");

      const bold_units = document.createElement("span");
      bold_units.setAttribute("class", "bold");
      bold_units.innerHTML = courseData[i].content.units;
      units.appendChild(bold_units);

      units.insertAdjacentText("beforeend", "Units ");

      const bold_lessons = document.createElement("span");
      bold_lessons.setAttribute("class", "bold");
      bold_lessons.innerHTML = courseData[i].content.lessons;
      lessons.appendChild(bold_lessons);

      lessons.insertAdjacentText("beforeend", "Lessons ");

      const bold_topics = document.createElement("span");
      bold_topics.setAttribute("class", "bold");
      bold_topics.innerHTML = courseData[i].content.topics;
      topics.appendChild(bold_topics);

      topics.insertAdjacentText("beforeend", "Topics ");

      contents.appendChild(units);
      contents.appendChild(lessons);
      contents.appendChild(topics);
    }

    const teacher = document.createElement("div");
    teacher.setAttribute("class", "teacher");

    const teacher_name = document.createElement("div");
    teacher_name.setAttribute("class", "teacher-name");
    teacher_name.innerHTML = courseData[i].teacher;
    teacher.appendChild(teacher_name);

    const arrow_down = document.createElement("img");
    arrow_down.setAttribute(
      "src",
      "\\quantum-screen-assets\\icons\\arrow-down.svg"
    );
    arrow_down.setAttribute("class", "arrow-down");
    teacher.appendChild(arrow_down);

    const student_date = document.createElement("div");
    student_date.setAttribute("class", "student-date");

    if (courseData[i].numberOfStudents != null) {
      student_date.innerHTML =
        courseData[i].numberOfStudents + " Students ";

      if (courseData[i].date.start != null) {
        const divider = document.createElement("span");
        divider.setAttribute("class", "student-date-divider");
        divider.innerHTML = " | ";

        student_date.appendChild(divider);

        student_date.insertAdjacentText(
          "beforeend",
          courseData[i].date.start + " - " + courseData[i].date.end
        );
      }
    }

    const manage_course = document.createElement("div");
    manage_course.setAttribute("class", "manage-course");

    const preview = document.createElement("img");
    preview.setAttribute(
      "src",
      "\\quantum-screen-assets\\icons\\preview.svg"
    );
    preview.setAttribute("class", "preview");
    manage_course.appendChild(preview);

    const manage = document.createElement("img");
    manage.setAttribute(
      "src",
      "\\quantum-screen-assets\\icons\\manage-course.svg"
    );
    manage.setAttribute("class", "manage");
    manage_course.appendChild(manage);

    const grade_submission = document.createElement("img");
    grade_submission.setAttribute(
      "src",
      "\\quantum-screen-assets\\icons\\grade-submissions.svg"
    );
    grade_submission.setAttribute("class", "grade-submission");
    manage_course.appendChild(grade_submission);

    const reports = document.createElement("img");
    reports.setAttribute(
      "src",
      "\\quantum-screen-assets\\icons\\reports.svg"
    );
    reports.setAttribute("class", "reports");
    manage_course.appendChild(reports);

    info.appendChild(title);
    info.appendChild(subject_grade);
    info.appendChild(contents);
    info.appendChild(teacher);
    info.appendChild(student_date);

    top.appendChild(info);
    course.appendChild(top);
    course.appendChild(manage_course);

    card.appendChild(course);
  }