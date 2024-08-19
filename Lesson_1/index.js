// btap 1
const tinhBinhPhuong = (a) => {
    return a*a;
  };
//   btap 2

const chuaTuKhoa = (key, word) => {
    return key in word
}

// btap3
array = ["mot", "hai", "ba"]
const themTienTo = (arr, prefix) => {
    const kq = [];
    for (let i = 0; i < arr.length; i++) {
        kq.push(`${prefix}${arr[i]}`);
    }
    return kq;
}
// btap 4 
arr4 = [1,2,3,4,5,6,9]

const nhanDoi = (arr) => {
    const arrNhan2 = [];
    for (let i = 0; i < arr.length; i++) {
        arrNhan2.push(arr[i] * 2);
    }
    return arrNhan2;
}


const laySoLe = (arr) => {
    const soLe = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1)
        {
        soLe.push(arr[i]);
        }
    }
    return soLe
}

// btap 5
const employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];

const workTime = (employees) =>
{
    let sum = 0 
    for (i =0 ; i < employees.length; i ++ )
    {
        const { workingDays } = employees[i];
        console.log(workingDays)
        sum += workingDays
     
    }
    console.log(sum)
}
workTime(employees)

// btap 6

const employeess = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
];

const salarySum = (employeess) =>
{
    let max = 0 
    let result = []
    for (i =0 ; i < employeess.length; i ++ )
    {
        const { salary } = employeess[i];
        
        if (salary > max)
        {
            max = salary;
            result = employees[i]
        }
    
    }
    console.log(result)
}
salarySum(employeess)

//btap 7
const employee3 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];

const workDay = (employee3) =>
{
    let cong = 0 
    let maxCong = 0 
    let result = []
    for (i =0 ; i < employee3.length; i ++ )
    {
        const { workingDays } = employee3[i];
        const { lateDays } = employee3[i];
        cong = workingDays - lateDays
        if (cong > maxCong)
        {
            maxCong = cong
            result = employee3[i]
        }
        
    }
    console.log(result)
}
workDay(employee3)

//btap 8 
const employee4 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];
const nameGroup = (employee4) =>{
    for (i =0 ; i < employee4.length; i ++ )
    {
        const { name } = employee3[i];
        const {id} = employee3[i]
        for (j = i+1 ; j < employee4.length -1; i ++ )
        {

        }   
    }
}
//btap 9 
const employee6 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];
function groupEmployeesByName(employees) {
    const groupedE = {};

    for (const employee of employees) {
        const { name } = employee;
        if (!groupedE[name]) {
            groupedE[name] = [];
        }
        groupedE[name].push(employee);
    }

    console.log(groupedE)
}

groupEmployeesByName(employee6)