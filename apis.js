const axios = require("axios");
const t = require("twit");
//twitter
var params = {
    method: 'POST',
    url:"https://api.twitter.com/oauth/request_token",
    headers:{
        "Authentication": 'OAuth oauth_nonce="yeeeeeeeeet", oauth_callback="http%3A%2F%2Flocaltest.me%3A3000", oauth_signature_method="HMAC-SHA1", oauth_consumer_key="OqEqJeafRSF11jBMStrZz", oauth_signature="Pc%2BMLdv028fxCErFyi8KXFM%2BddU%3D", oauth_version="1.0"'      
    },
};
(async ()=>{
    await axios(params);
})()