'use strict';

let slides = {
    footerSetup(source, inst) {
        let revealWrapper = document.querySelector( '.reveal' );
        let foot = document.createElement('div');
        foot.classList.add('footer');
        revealWrapper.appendChild(foot);

        Reveal.addEventListener('slidechanged', function (event) {
            //let add_footer_string = document.getElementsID('foot-append');
            let add_footer_string = document.getElementById('foot-append').innerHTML.toString();
            //let add_footer_string = '';
            if (add_footer_string != '') {
                add_footer_string = ' | ' + add_footer_string;
            }
            if (event.indexh != 0) {
                let index = String(event.indexh);
                if (event.indexv != 0) {
                    index += '.' + event.indexv;
                }
                foot.innerHTML = index + ' | ' + source + ' | ' + inst + add_footer_string;
                
            } else {
                foot.innerHTML = '';
            }
        }, false);
    }
};
