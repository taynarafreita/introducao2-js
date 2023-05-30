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

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return `Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}.`
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}