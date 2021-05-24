import { Role } from './role';

export function configureFakeBackend() {
  // array in local storage for user records
  let students = JSON.parse(localStorage.getItem('students')) ||  [{
    "id": 1,
    "first_name": "Lizbeth",
    "last_name": "Guly",
    "class": "A",
    "roll_no": 70,
    "dob": "6/27/1994",
    "subjects": [
      { "id": 1, "name": "English", "teacher": "Liam", "marks": 55 },
      { "id": 2, "name": "Physics", "teacher": "Noah", "marks": 75 },
      { "id": 3, "name": "Chemistry", "teacher": "Oliver", "marks": 45 },
      { "id": 4, "name": "Maths", "teacher": "Elijah", "marks": 85 },
      { "id": 5, "name": "Biology", "teacher": "William", "marks": 95 }
    ]
  }, {
    "id": 2,
    "first_name": "Dorris",
    "last_name": "Waterhous",
    "class": "A",
    "roll_no": 96,
    "dob": "5/21/1959",
    "subjects": [
      { "id": 1, "name": "English", "teacher": "Liam", "marks": 55 },
      { "id": 2, "name": "Physics", "teacher": "Noah", "marks": 75 },
      { "id": 3, "name": "Chemistry", "teacher": "Oliver", "marks": 45 },
      { "id": 4, "name": "Maths", "teacher": "Elijah", "marks": 85 },
      { "id": 5, "name": "Biology", "teacher": "William", "marks": 95 }
    ]
  }, {
    "id": 3,
    "first_name": "Devondra",
    "last_name": "Leopold",
    "class": "B",
    "roll_no": 71,
    "dob": "10/30/2012",
    "subjects": [
      { "id": 1, "name": "English", "teacher": "Liam", "marks": 55 },
      { "id": 2, "name": "Physics", "teacher": "Noah", "marks": 75 },
      { "id": 3, "name": "Chemistry", "teacher": "Oliver", "marks": 45 },
      { "id": 4, "name": "Maths", "teacher": "Elijah", "marks": 85 },
      { "id": 5, "name": "Biology", "teacher": "William", "marks": 95 }
    ]
  }, {
    "id": 4,
    "first_name": "Chariot",
    "last_name": "Flewan",
    "class": "D",
    "roll_no": 35,
    "dob": "5/15/1961",
    "subjects": [
      { "id": 1, "name": "English", "teacher": "Liam", "marks": 55 },
      { "id": 2, "name": "Physics", "teacher": "Noah", "marks": 75 },
      { "id": 3, "name": "Chemistry", "teacher": "Oliver", "marks": 45 },
      { "id": 4, "name": "Maths", "teacher": "Elijah", "marks": 85 },
      { "id": 5, "name": "Biology", "teacher": "William", "marks": 95 }
    ]
  }, {
    "id": 5,
    "first_name": "Mile",
    "last_name": "Arkin",
    "class": "C",
    "roll_no": 50,
    "dob": "8/8/2005",
    "subjects": [
      { "id": 1, "name": "English", "teacher": "Liam", "marks": 55 },
      { "id": 2, "name": "Physics", "teacher": "Noah", "marks": 75 },
      { "id": 3, "name": "Chemistry", "teacher": "Oliver", "marks": 45 },
      { "id": 4, "name": "Maths", "teacher": "Elijah", "marks": 85 },
      { "id": 5, "name": "Biology", "teacher": "William", "marks": 95 }
    ]
  }, {
    "id": 6,
    "first_name": "Valry",
    "last_name": "Gionettitti",
    "class": "A",
    "roll_no": 90,
    "dob": "12/18/1993",
    "subjects": [
      { "id": 1, "name": "English", "teacher": "Liam", "marks": 55 },
      { "id": 2, "name": "Physics", "teacher": "Noah", "marks": 75 },
      { "id": 3, "name": "Chemistry", "teacher": "Oliver", "marks": 45 },
      { "id": 4, "name": "Maths", "teacher": "Elijah", "marks": 85 },
      { "id": 5, "name": "Biology", "teacher": "William", "marks": 95 }
    ]
  }, {
    "id": 7,
    "first_name": "Katherina",
    "last_name": "McTeggart",
    "class": "B",
    "roll_no": 26,
    "dob": "4/26/1984",
    "subjects": [
      { "id": 1, "name": "English", "teacher": "Liam", "marks": 55 },
      { "id": 2, "name": "Physics", "teacher": "Noah", "marks": 75 },
      { "id": 3, "name": "Chemistry", "teacher": "Oliver", "marks": 45 },
      { "id": 4, "name": "Maths", "teacher": "Elijah", "marks": 85 },
      { "id": 5, "name": "Biology", "teacher": "William", "marks": 95 }
    ]
  }, {
    "id": 8,
    "first_name": "Danny",
    "last_name": "Rennebeck",
    "class": "B",
    "roll_no": 73,
    "dob": "11/11/1980",
    "subjects": [
      { "id": 1, "name": "English", "teacher": "Liam", "marks": 55 },
      { "id": 2, "name": "Physics", "teacher": "Noah", "marks": 75 },
      { "id": 3, "name": "Chemistry", "teacher": "Oliver", "marks": 45 },
      { "id": 4, "name": "Maths", "teacher": "Elijah", "marks": 85 },
      { "id": 5, "name": "Biology", "teacher": "William", "marks": 95 }
    ]
  }, {
    "id": 9,
    "first_name": "Daryl",
    "last_name": "Kenwell",
    "class": "C",
    "roll_no": 77,
    "dob": "3/7/1971",
    "subjects": [
      { "id": 1, "name": "English", "teacher": "Liam", "marks": 55 },
      { "id": 2, "name": "Physics", "teacher": "Noah", "marks": 75 },
      { "id": 3, "name": "Chemistry", "teacher": "Oliver", "marks": 45 },
      { "id": 4, "name": "Maths", "teacher": "Elijah", "marks": 85 },
      { "id": 5, "name": "Biology", "teacher": "William", "marks": 95 }
    ]
  }];

  // monkey patch fetch to setup fake backend
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      //setTimeout(handleRoute, 500);

      handleRoute();

      function handleRoute() {
        if(opts !== undefined) { 
          const { method } = opts;
       
        
        switch(true) {
          case url.endsWith('/students') && method === 'GET':
            return getStudents();
          case url.match(/\/students\/\d+$/) && method === 'GET':
            return getStudentsById();
          case url.match(/\/students\/\d+$/) && method === 'PUT':
            return updateStudents();
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
              .then(response => resolve(response))
              .catch(error => reject(error));
          }
        }
      }

      // route functions

      function getStudents() {
        return ok(students);
      }

      function getStudentsById() {
        let student = students.find(x => x.id === idFromUrl());
        return ok(student);
      }

      function updateStudents() {
        let params = body();
        let student = students.find(x => x.id === idFromUrl());


        // update and save student
        Object.assign(student, params);
        localStorage.setItem('students', JSON.stringify(students));

        return ok();
      }

      // helper functions
      function ok(body) {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body))});
      }

      function idFromUrl() {
        const urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
      }

    function body() {
      return opts.body && JSON.parse(opts.body);    
    }
    });
  }

}