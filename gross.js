let form = document.getElementById("myform")
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let basic = document.getElementById("basic_salary").value
    let basic_salary = Number(basic)
    let Benefit = document.getElementById("Benefits").value
    let Benefits = Number(Benefit)
    let gross_salary = basic_salary + Benefits
    document.getElementById("result").innerHTML = gross_salary
})








