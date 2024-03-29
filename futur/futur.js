if (window.innerWidth < 720) {
  document.querySelectorAll("p").forEach(element => {
    element.style.display = 'block';
  })}

const lingid = document.querySelectorAll(".link");

lingid.forEach((kast) => {
  console.log(kast);
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let interval = null;
  
  kast.onmouseover = event => {  
    
    /* siia tuleb shakemis effekt
    document.querySelectorAll("teksti-kastid").forEach(element => {
    element.style.display = 'block';
  })} */
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
        
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 15); /* originaalselt 30 */
  }

});



/* document.querySelector("a").onclick = event => {
  document.write()
  <img src="/explosion.gif" alt="explosion" />
} */
