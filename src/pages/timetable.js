const timetable = [
        {
            day: "Monday",
            schedule: [
                { time: "9:30 AM - 10:20 AM", subjectCode: "ECEPC81", subjectName: "Digital System Design", faculty: "Mr. G. V. V. N. Rama Rao" },
                { time: "10:20 AM - 11:10 AM", subjectCode: "ECEL81", subjectName: "VLSI Design", faculty: "Mr. V. Ram Nishanth" },
                { time: "11:10 AM - 12:00 PM", subjectCode: "ECEMC81", subjectName: "Microcontroller", faculty: "Mrs. V. Sridevi" },
                { time: "12:00 PM - 12:50 PM", subjectCode: "ECEOE81", subjectName: "Robotics", faculty: "Dr. P. V. G. K. S. Raju" },
                { time: "12:50 PM - 1:40 PM", subjectCode: "Break", subjectName: "Lunch", faculty: "N/A" },
                { time: "1:40 PM - 2:30 PM", subjectCode: "ECEOP81", subjectName: "IOT & Applications", faculty: "Mr. G. Krishna Prasad" },
                { time: "2:30 PM - 4:10 PM", subjectCode: "ECEL83", subjectName: "Microcontroller Lab", faculty: "Mr. K. Sai Kumar" },
                { time: "4:10 PM - 5:00 PM", subjectCode: "PROJECT", subjectName: "Project", faculty: "Mr. G. V. V. N. Rama Rao" },
            ],
        },
        {
            day: "Tuesday",
            schedule: [
                { time: "9:30 AM - 10:20 AM", subjectCode: "ECEOP81", subjectName: "IOT & Applications", faculty: "Mr. G. Krishna Prasad" },
                { time: "10:20 AM - 11:10 AM", subjectCode: "ECEOE81", subjectName: "Robotics", faculty: "Dr. P. V. G. K. S. Raju" },
                { time: "11:10 AM - 12:00 PM", subjectCode: "MGT", subjectName: "Management", faculty: "Mr. S. Satyanarayana" },
                { time: "12:00 PM - 12:50 PM", subjectCode: "ECEPC81", subjectName: "Digital System Design", faculty: "Mr. G. V. V. N. Rama Rao" },
                { time: "12:50 PM - 1:40 PM", subjectCode: "Break", subjectName: "Lunch", faculty: "N/A" },
                { time: "1:40 PM - 2:30 PM", subjectCode: "ECEMC81", subjectName: "Microcontroller", faculty: "Mrs. V. Sridevi" },
                { time: "2:30 PM - 4:10 PM", subjectCode: "ECEL82", subjectName: "Digital System Design Lab", faculty: "Ms. T. P. Mounica" },
                { time: "4:10 PM - 5:00 PM", subjectCode: "MOOCS", subjectName: "MOOCS", faculty: "N/A" },
            ],
        },
        {
            day: "Wednesday",
            schedule: [
                { time: "9:30 AM - 10:20 AM", subjectCode: "ECEMC81", subjectName: "Microcontroller", faculty: "Mrs. V. Sridevi" },
                { time: "10:20 AM - 11:10 AM", subjectCode: "ECEOP81", subjectName: "IOT & Applications", faculty: "Mr. G. Krishna Prasad" },
                { time: "11:10 AM - 12:00 PM", subjectCode: "MGT", subjectName: "Management", faculty: "Mr. S. Satyanarayana" },
                { time: "12:00 PM - 12:50 PM", subjectCode: "ECEOE81", subjectName: "Robotics", faculty: "Dr. P. V. G. K. S. Raju" },
                { time: "12:50 PM - 1:40 PM", subjectCode: "Break", subjectName: "Lunch", faculty: "N/A" },
                { time: "1:40 PM - 2:30 PM", subjectCode: "ECEL81", subjectName: "VLSI Design", faculty: "Mr. V. Ram Nishanth" },
                { time: "2:30 PM - 4:10 PM", subjectCode: "ECEL82", subjectName: "Digital System Design Lab", faculty: "Ms. T. P. Mounica" },
                { time: "4:10 PM - 5:00 PM", subjectCode: "ECEPC81", subjectName: "Digital System Design", faculty: "Mr. G. V. V. N. Rama Rao" },
            ],
        },
        {
            day: "Thursday",
            schedule: [
                { time: "9:30 AM - 10:20 AM", subjectCode: "MGT", subjectName: "Management", faculty: "Mr. S. Satyanarayana" },
                { time: "10:20 AM - 11:10 AM", subjectCode: "ECEPC81", subjectName: "Digital System Design", faculty: "Mr. G. V. V. N. Rama Rao" },
                { time: "11:10 AM - 12:00 PM", subjectCode: "ECEOE81", subjectName: "Robotics", faculty: "Dr. P. V. G. K. S. Raju" },
                { time: "12:00 PM - 12:50 PM", subjectCode: "ECEMC81", subjectName: "Microcontroller", faculty: "Mrs. V. Sridevi" },
                { time: "12:50 PM - 1:40 PM", subjectCode: "Break", subjectName: "Lunch", faculty: "N/A" },
                { time: "1:40 PM - 2:30 PM", subjectCode: "ECEOP81", subjectName: "IOT & Applications", faculty: "Mr. G. Krishna Prasad" },
                { time: "2:30 PM - 4:10 PM", subjectCode: "ECEL83", subjectName: "Microcontroller Lab", faculty: "Mr. K. Sai Kumar" },
                { time: "4:10 PM - 5:00 PM", subjectCode: "ECEPC81 (Tut)", subjectName: "Digital System Design (Tutorial)", faculty: "Mr. G. V. V. N. Rama Rao" },
            ],
        },
        {
            day: "Friday",
            schedule: [
                { time: "9:30 AM - 10:20 AM", subjectCode: "ECEL81", subjectName: "VLSI Design", faculty: "Mr. V. Ram Nishanth" },
                { time: "10:20 AM - 11:10 AM", subjectCode: "MGT", subjectName: "Management", faculty: "Mr. S. Satyanarayana" },
                { time: "11:10 AM - 12:00 PM", subjectCode: "ECEPC81", subjectName: "Digital System Design", faculty: "Mr. G. V. V. N. Rama Rao" },
                { time: "12:00 PM - 12:50 PM", subjectCode: "ECEOP81", subjectName: "IOT & Applications", faculty: "Mr. G. Krishna Prasad" },
                { time: "12:50 PM - 1:40 PM", subjectCode: "Break", subjectName: "Lunch", faculty: "N/A" },
                { time: "1:40 PM - 2:30 PM", subjectCode: "ECEMC81", subjectName: "Microcontroller", faculty: "Mrs. V. Sridevi" },
                { time: "2:30 PM - 4:10 PM", subjectCode: "PROJECT", subjectName: "Project", faculty: "Mr. G. V. V. N. Rama Rao" },
                { time: "4:10 PM - 5:00 PM", subjectCode: "ECEOE81", subjectName: "Robotics", faculty: "Dr. P. V. G. K. S. Raju" },
            ],
        },
        {
            day: "Saturday",
            schedule: [
                { time: "9:30 AM - 10:20 AM", subjectCode: "MGT", subjectName: "Management", faculty: "Mr. S. Satyanarayana" },
                { time: "10:20 AM - 11:10 AM", subjectCode: "ECEPC81", subjectName: "Digital System Design", faculty: "Mr. G. V. V. N. Rama Rao" },
                { time: "11:10 AM - 12:00 PM", subjectCode: "ECEMC81", subjectName: "Microcontroller", faculty: "Mrs. V. Sridevi" },
                { time: "12:00 PM - 12:50 PM", subjectCode: "ECEL81", subjectName: "VLSI Design", faculty: "Mr. V. Ram Nishanth" },
                { time: "12:50 PM - 1:40 PM", subjectCode: "Break", subjectName: "Lunch", faculty: "N/A" },
                { time: "1:40 PM - 2:30 PM", subjectCode: "ECEOE81", subjectName: "Robotics", faculty: "Dr. P. V. G. K. S. Raju" },
                { time: "2:30 PM - 3:20 PM", subjectCode: "ECEOP81", subjectName: "IOT & Applications", faculty: "Mr. G. Krishna Prasad" },
                { time: "3:20 PM - 5:00 PM", subjectCode: "PROJECT", subjectName: "Project", faculty: "Mr. G. V. V. N. Rama Rao" },
            ],
        },
    ];


export default timetable;