const axios = require("axios");
const t = require("twit");
const fs = require("fs");
//twitter

function tRandomPost(t){
    if(Math.random() > 0.5){
        var messages = ["first person to dm me, I will buy you bubble tea for a week", "despite the constant negative press covfefe", "sometimes when I'm too lazy to make dinner, I will take my cats dry food", "I wear adult diapers"];
        tPost(t, messages[Math.floor(Math.random()*messages.length)]);
    }else{
        var images = ["reeeee.png"];
        tPostImage(t, images[Math.floor(Math.random()*images.length)]);
    }
}

function tPost(t, data){
    t.post('statuses/update', { status: data }, function(err, data, response) {
        console.log(data);
    });
}
function tPostImage(t, imgPath){
    var b64content = fs.readFileSync('./pictures/' + imgPath, { encoding: 'base64' })
 
    t.post('media/upload', { media_data: b64content }, function (err, data, response) {
        console.log(data);
        fs.writeFileSync("asdf.txt", data);
        var mediaIdStr = data.media_id_string
        var altText = "why was I unproductive"
        var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
        
        t.post('media/metadata/create', meta_params, function (err, data, response) {
            console.log(data);
            fs.writeFileSync("asdfasdf.txt", data);
            if (!err) {
                var params = { status: 'felt cute might delete', media_ids: [mediaIdStr] }
            
                t.post('statuses/update', params, function (err, data, response) {
                    console.log(data)
                })
            }
        })
        })
}

module.exports = {
    tRandomPost,
    tPost,
    tPostImage
};