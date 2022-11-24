const words = ["Student & Web Development", "Student & Web Development"]

let cursor = gsap.to('.cursor', {opacity: 0, ease:"power2.inOut", repeat: -1})

let masterTl = gsap.timeline({repeat: -1})

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1.5, yoyo: true, repeatDelay: 2})
    tl.to('.text', {duration: 3, text: word})
    masterTl.add(tl)
})

