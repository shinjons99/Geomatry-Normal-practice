

let serial = 0;
//* this one for first triangle calculation
document.getElementById('first-calculation').addEventListener('click', function(){
   serial+=1;
  //*get data in step-2   
  const geometryName = document.getElementById('first-name').innerText;
  const firstValueOfTriangle = document.getElementById('first-value').value;
  
  const secondValueOfTriangle = document.getElementById('second-value').value;
 

  const triangleResult = (0.5 * parseFloat(firstValueOfTriangle) * parseFloat(secondValueOfTriangle)).toFixed(2);
  
  //*validation for triangle validation

  if (firstValueOfTriangle === "" || secondValueOfTriangle === "") {
    alert("Please fill out the input field");
  } else {
    const triangleResult = (
      0.5 *
      parseFloat(firstValueOfTriangle) *
      parseFloat(secondValueOfTriangle)
    ).toFixed(2);

      displayData(geometryName, triangleResult);
    }
  //*
 
})


//* second calculation 
document.getElementById('second-calculation').addEventListener('click', function(){
    serial+=1;
  const rectangleGeometryName = document.getElementById('rectangle-name').innerText;
  const firstValueOfRectangle = document.getElementById('rectangle-first-value').value;
  
  const secondValueOfRectangle = document.getElementById('rectangle-second-value').value;
 

  const rectangleResult = (parseFloat(firstValueOfRectangle) * parseFloat(secondValueOfRectangle)).toFixed(2);

//* validation for rectangle equation
if (firstValueOfRectangle === "" || secondValueOfRectangle === "") {
    alert("Please fill out the input field");
  } else {
    const rectangleResult = (
      parseFloat(firstValueOfRectangle) * parseFloat(secondValueOfRectangle)
    ).toFixed(2);
    displayData(rectangleGeometryName, rectangleResult);
  }

//*validation close


  
})

//* Third calculation 
document.getElementById('third-calculation').addEventListener('click', function(){
    serial+=1;
    const pGeometryName = document.getElementById('parallelogram-name').innerText;
    const firstValueOfParallelogram = document.getElementById('parallelogram-first-value').innerText;
    
    const secondValueOfParallelogram = document.getElementById('parallelogram-second-value').innerText;
   
  
    const parallelogramResult = 0.5 * (parseFloat(firstValueOfParallelogram) * parseFloat(secondValueOfParallelogram)).toFixed(2);
  //* validation for the third calculation
  if (firstValueOfParallelogram === "" || secondValueOfParallelogram === "") {
    alert("Please fill out the input field");
  } else {
    const parallelogramResult =
      0.5 *
      (
        parseFloat(firstValueOfParallelogram) *
        parseFloat(secondValueOfParallelogram)
      ).toFixed(2);

    displayData(pGeometryName, parallelogramResult);
  }
    
  })
//* Fourth calculation
document.getElementById('fourth-calculation').addEventListener('click', function(){
    serial+=1;
    const rhombusGeometryName = document.getElementById('rhombus-name').innerText;
    const firstValueOfRhombus = document.getElementById('rhombus-first-value').innerText;
    
    const secondValueOfRhombus = document.getElementById('rhombus-second-value').innerText;
   
  
    const rhombusResult = 0.5 * (parseFloat(firstValueOfRhombus) * parseFloat(secondValueOfRhombus)).toFixed(2);
  
    displayData(rhombusGeometryName, rhombusResult);
    
  })

//* Fifth calculation
document.getElementById('fifth-calculation').addEventListener('click', function(){
    serial+=1;
    const pentagonGeometryName = document.getElementById('pentagon-name').innerText;
    const firstValueOfPentagon = document.getElementById('pentagon-first-value').innerText;
    
    const secondValueOfPentagon = document.getElementById('pentagon-second-value').innerText;
   
  
    const pentagonResult = 0.5 * (parseFloat(firstValueOfPentagon) * parseFloat(secondValueOfPentagon)).toFixed(2);
  
    displayData(pentagonGeometryName, pentagonResult);
    
  })

//* sixth calculation
document.getElementById('sixth-calculation').addEventListener('click', function(){
    serial+=1;
    const ellipseGeometryName = document.getElementById('ellipse-name').innerText;
    const firstValueOfEllipse = document.getElementById('ellipse-first-value').innerText;
    
    const secondValueOfEllipse = document.getElementById('ellipse-second-value').innerText;
   
  
    const ellipseResult =  (3.14 * parseFloat(firstValueOfEllipse) * parseFloat(secondValueOfEllipse)).toFixed(2);
  
    displayData(ellipseGeometryName, ellipseResult);
    
  })






//* common function that display data
function displayData(gName, result){
    const container = document.getElementById('table-container');
  
  const tr = document.createElement('tr');
  tr.innerHTML=`
  <td>${serial}</td>
  <td>${gName}</td>
  <td>${result}cm<sup>2</sup></td>
  
  `
  container.appendChild(tr);
}

//*Random color for all card
document.getElementById('first-card').addEventListener('mouseenter', function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('first-card').style.backgroundColor = '#'+randomColor;
})
document.getElementById('second-card').addEventListener('mouseenter', function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('second-card').style.backgroundColor = '#'+randomColor;
})
document.getElementById('third-card').addEventListener('mouseenter', function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('third-card').style.backgroundColor = '#'+randomColor;
})
document.getElementById('fourth-card').addEventListener('mouseenter', function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('fourth-card').style.backgroundColor = '#'+randomColor;
})
document.getElementById('fifth-card').addEventListener('mouseenter', function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('fifth-card').style.backgroundColor = '#'+randomColor;
})
document.getElementById('sixth-card').addEventListener('mouseenter', function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('sixth-card').style.backgroundColor = '#'+randomColor;
})
