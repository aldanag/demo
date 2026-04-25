// Esperamos a que todo cargue
window.addEventListener('load', () => {

    // 1. Timeline principal de GSAP para la entrada
    const tl = gsap.timeline({
        defaults: { ease: "power4.out" }
    });

    // 2. Animación de entrada
    tl.from(".navbar", {
        y: -50,
        opacity: 0,
        duration: 1.2
    })
    .from("h1", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2
    }, "-=0.8")
    .from(".reveal-text-sub", {
        y: 20,
        opacity: 0,
        duration: 1
    }, "-=1")
    .from(".cta-container", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from(".card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    }, "-=0.8");

    // 3. Efecto de flotación continua para las cards
    gsap.to(".card", {
        y: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1
    });

    // 4. Movimiento orgánico de las Auroras
    gsap.to(".aurora-blob", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
            each: 2,
            from: "random"
        }
    });

    // 5. Interacción suave con el mouse para las auroras
    document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 50;
        const yPos = (clientY / window.innerHeight - 0.5) * 50;

        gsap.to(".aurora-blob", {
            x: `+=${xPos * 0.1}`,
            y: `+=${yPos * 0.1}`,
            duration: 2,
            ease: "power2.out"
        });
    });
});
