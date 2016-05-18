<header>

# Students Grades Web Service API

</header>

<main>

<section id="general">

This is a web application of student grades, the details are returned as JSON objects.  
Each student has id, name, grade, couese and year. Here is an example:  

{  
  "id" : "1",  
  "name" : "Elsa",  
  "grade" : "78",  
  "course" : "ws",  
  "year" : "2015"  
}

</section>

<section>

## Excellence Students

To get the details of the JSON you need to click on the link below:  

[**All Students**](ws-ex1-noa.herokuapp.com/getAllExcellenceStudent)

</section>

<section>

## Excellence Students

To get the details of a certain student by id you need to click on the link below (this link is of student with id 1):  

[**Student Grade by id**](ws-ex1-noa.herokuapp.com/getStudGrade/:1)

</section>

<section>

## Excellence Students

To get the details of the outstanding students that has grades of 90 and above in a certain year you need to click on the link below (this link is for year 2016):  

[**Excellence Students by year**](ws-ex1-noa.herokuapp.com/getExcellenceByYear/2016)

</section>

</main>
