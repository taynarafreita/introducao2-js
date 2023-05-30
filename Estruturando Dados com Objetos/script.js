const patients = [ 
    {
        name: "Taynara",
        age: 24,
        weight: 48,
        height: 158,
    },
    {
        name: "Robson",
        age: 25,
        weight: 96,
        height: 170,
        },
    {
       name: "Tay",
       age: 24,
       weight: 50,
       height: 158,
    },
]

let patientsNames = []

for(let patient of patients) {
    patientsNames.push(patient.name)
}

alert(patientsNames)