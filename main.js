        let bg = document.getElementById("bg");
        let moon = document.getElementById("moon");
        let mountain = document.getElementById("mountain");
        let road = document.getElementById("road");
        let scene = document.getElementById("scene");
        let toptext = document.getElementById("toptext");
            window.addEventListener('scroll',function(){
        var value = window.scrollY;
        bg.style.top = value * 0.5 + 'px';
        moon.style.left = -value * 0.5 + 'px';  
        mountain.style.top = value * 0.15 + 'px';
        road.style.top = value * 0.20 + 'px';
        scene.style.right = value * 0.15 + 'px';
        toptext.style.top = value * 0.05 + 'rem';
            })