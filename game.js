var heigth = 0
var width = 0
var vidas = 1
var time = 60

var createflytime = 1500

var level = window.location.search
level = level.replace('?', '')

if (level === 'easy') {
    //1500
    createflytime = 1500
} else if (level === 'medium') {
    //1000
    createflytime = 1000
} else if (level === 'chucknorris') {
    //400
    createflytime = 200
}

function adjustGameSize( ) { 

    heigth = window.innerHeight
    width = window.innerWidth

    console.log(heigth, width)

}

adjustGameSize()


var cronometro = setInterval(function() {
    time -= 1

    document.getElementById('cronometro').innerHTML = time

    if(time < 1) {
        clearInterval(cronometro)
        clearInterval(createfly)
        window.location.href = 'victory.html'

    } else {
    document.getElementById('cronometro').innerHTML = time
    }
   
}, 1000)


function randomPosition() {

        // Clear the before fly (if there)

    if(document.getElementById('fly')) {

        document.getElementById('fly').remove()

        //Lifes
        //console.log('elemento selecionado foi: v + vidas')

        if(vidas > 3){
            window.location.href = 'gameover.html'
        } else {

        document.getElementById('v' + vidas).src="img/coracao_vazio.png"

        vidas++
        
            }

        }


        // Random Position

        var positionX = Math.floor(Math.random() * width) - 90
        var positionY = Math.floor(Math.random() * heigth) - 90

        positionX = positionX < 0 ? 0 : positionX
        positionY = positionY < 0 ? 0 : positionY

        console.log(positionX, positionY)




        //Create Element HTML 

        var mosquito = document.createElement('img')
        mosquito.src = 'img/mosca.png'
        mosquito.className = randomSize() + ' ' + randomSide()
        mosquito.style.left = positionX + 'px'
        mosquito.style.top = positionY + 'px'
        mosquito.style.position = 'absolute'
        mosquito.id = 'fly'
        mosquito.onclick = function() {
            this.remove()

        }


        document.body.appendChild(mosquito)

    

        }

function randomSize() { 

            var classe = Math.floor(Math.random() * 3)
            
            switch(classe) {
                case 0:
                    return 'mosquito1'
                case 1:
                    return 'mosquito2' 
                case 2:
                    return 'mosquito3'

            }   
        }


function randomSide() { 

            var classe = Math.floor(Math.random() * 2)
            
            switch(classe) {
                case 0:
                    return 'sideA'
                case 1:
                    return 'sideB' 
            

            }   
        }