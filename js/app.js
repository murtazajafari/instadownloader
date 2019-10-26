
const _ = e => document.querySelector(e);
const render = _('.result');


// create video
const createVideo = data => {
    let v = document.createElement('video');
    v.src = data.content;
    v.controls = true;
    v.autoplay = true;

    render.innerHTML = "";
    render.appendChild(v);
};
// create image
const createImg = data => {
    // create image
    let i = document.createElement('img');
    i.src = data.content;

    render.innerHTML = "";
    render.appendChild(i);

};

// extract html
const getMedia = () => {
    // get input value
    let url = _('input').value;
    if (url) {
        fetch(url).
            then(r => r.text()).
            then(r => {
                // render html
                render.innerHTML = r;
                // wait, find meta and create video or image
                let w = setTimeout(() => {
                    let v = _('meta[property="og:video"]');
                    if (v) {
                        createVideo(v);
                    } else {
                        let img = _('meta[property="og:image"]');
                        if (img) {
                            createImg(img);
                        } else {
                            
                        };
                    }
                    clearTimeout(w);
                }, 200);
            });
    } else {
        

    }
};