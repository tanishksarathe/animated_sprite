let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.two',
        start:"0% 100%",
        end:"50% 50%",
        scrub: true,
        markers : false,
    }
})

tl.to("#spr",{
    top: "124%",
    left: "10.5%"
},'a')

tl.to('#c-lemon',{
    top:"170%",
    left:"20%",
},'a')

tl.to("#back-leaf",{
    transform : "scale(2)",
    overflow : "hidden"
},'a')

tl.to(".back-text",{
    transform : "scale(2)",
    
},'a')

tl.to('#lemons',{
    top:"170%",
    left:"60%",
},'a')

tl.to('.back-splash',{
   opacity: "0",
},'a')

tl.to('.in-splash',{
   opacity: "1",
},'a')

tl.to('#per-leaf',{
    top:"170%",
    left:"70%",
},'a')

let ntl = gsap.timeline({
    scrollTrigger : {
        trigger: '.three',
        start: "0% 80%",
        end: "50% 50%",
        scrub: true,
        markers : false
    }
})

ntl.to('.in-splash',{
    opacity: "0",
 },'a')

ntl.to('.ice',{
    left: "43%",
    top: "250%",
    opacity: "1"
},'a')

ntl.to('.slice',{
    left: "43%",
    top: "250%",
    opacity: "1"
},'a')

ntl.to('.ice-2',{
    right: "43%",
    top: "250%",
    opacity: "1"
},'a')

ntl.to('.slice-2',{
    right: "43%",
    top: "250%",
    opacity: "1"
},'a')

let ntlb = gsap.timeline({
    scrollTrigger : {
        trigger: '.three',
        start: "0% 3%",
        end: "50% 50%",
        scrub: true,
        markers : false
    }
})

ntlb.to('.clear-h', {
    opacity:"1"
},'c')
