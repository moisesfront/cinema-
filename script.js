document.getElementById('toggle-language').addEventListener('click', function() {
   
    const texts = document.querySelectorAll('.text');
    const overlay = document.querySelector('.text-overlay'); 

    texts.forEach(function(textElement) {
        if (textElement.dataset.lang === 'pt') {
            textElement.innerHTML = textElement.dataset.en; 
            textElement.dataset.lang = 'en'; 
        } else {
            textElement.innerHTML = textElement.dataset.pt; 
            textElement.dataset.lang = 'pt'; 
        }
    });

    if (overlay.dataset.lang === 'pt') {
        overlay.innerHTML = 'Discover the Best of Cinematic Productions'; 
        overlay.dataset.lang = 'en'; 
    } else {
        overlay.innerHTML = 'Descubra o Melhor das Produções Cinematográficas'; 
        overlay.dataset.lang = 'pt'; 
    }
});
