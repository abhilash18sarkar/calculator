document.getElementById("mybtn").onclick = async function(){
    let a = document.getElementById("input1").value
    let b = document.getElementById("input2").value
    let ans = await fetch(`https://py-app-vsyy.onrender.com/sum/${a}/${b}`)
    let ans2 = await ans.json()
    let text = document.getElementById("p1")
    text.textContent = `The sum of the two numbers is ${ans2.sum}`
    let text2 = document.getElementById("p2")
    let text3 = document.getElementById("p3")
    let text4 = document.getElementById("p4")
    text2.textContent = `The difference of the two numbers is ${ans2.difference}`
    text3.textContent = `The product of the two numbers is ${ans2.product}`
    text4.textContent = `The quotient of the two numbers is ${ans2.quotient}`
    console.log(ans2)
}