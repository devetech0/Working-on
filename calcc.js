var bala = document.querySelector(".modal-b")
    var button = document.querySelectorAll(".seem")
    const modal = document.querySelector(".modal-back")
    const but = document.querySelector(".modal-box")

    bala.addEventListener('click', function(event){
        modal.classList.add("active")
        but.classList.add("active")
    })

    button.forEach(touch => {
        touch.addEventListener('click', function(event){
            modal.classList.remove("active")
            but.classList.remove("active")
        })
    })


    background-image: url("Cur.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;