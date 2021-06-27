module.exports = ({ name, age, dob, gender, place, pincode, adhaarno, mobileno, email,
   dependents }) => {
   const today = new Date();

   let index = 0;
   return `
    <!DOCTYPE html>
   <html lang="en">

   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

      <link rel="stylesheet" href="styles.css">
   </head>

   <body>


      <div class="container" style="font-size: 24px;">
         <h1 class="text-center heading">Covid Registraton Form</h1>
         <hr class="solid">
         <h2 class="m-3">Candidate Details :- </h2>
         <div class="d-flex justify-content-around ms-3" style="display:flex">
               <div class="d-inline">
                  <p><span style="font-size: 30px;">Name:</span>${name}</p>
                  <p><span style="font-size: 30px;">Date of Birth:</span>${dob}</p>
                  <p><span style="font-size: 30px;">Gender:</span>${gender}</p>
               </div>
               <div class="d-inline">
                  <p><span style="font-size: 30px;">Place:</span>${place}</p>
                  <p><span style="font-size: 30px;">Adhaar no:</span>${adhaarno}</p>
                  <p><span style="font-size: 30px;">Mobile No:</span>${mobileno}</p>
               </div>
               <div>
                  <p><span style="font-size: 30px;">Email:</span>${email}</p>
               </div>
         </div>
         <hr class="solid">
         <h2 class="mt-3">Dependents Details :-</h2>
         <div class="container Dependents">
               <table class="table">
                  <thead>
                     <th>#</th>
                     <th>Name</th>
                     <th>Relation</th>
                     <th>Adhaar No</th>
                     <th>place</th>
                  </thead>
                  <tbody>
                  ${dependents.map(dobj => `<tr> <td>${++index}</td> <td>${dobj.name}</td> <td>${dobj.relation}</td> <td>${dobj.adhaarno}</td> <td>${dobj.place}</td></tr>`)}
                  </tbody>
               </table>

               <hr class="solid">
         </div>

      </div>






      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"
         integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG"
         crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
         integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
         crossorigin="anonymous"></script>
   </body>

</html>
    `;
};