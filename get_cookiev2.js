(function() {
    const authtoken = localStorage.getItem("authtoken");
    const userid = localStorage.getItem("userid");
    const pin = localStorage.getItem('nms_mgo_pincode');

    
    const cartString = localStorage.getItem("cart_info");
    const regex = /"id":(\d+)/;
    const match = regex.exec(cartString);
    var cartId = ''
    if (match && match.length > 1) {
        cartId = match[1];
        console.log(`Extracted Cart ID: ${cartId}`);
    } else {
        console.log("No cart ID found in the string.");
    }

    const result = {
        'userid': userid,
        'authtoken': authtoken,
        'cart_id': cartId,
        'pin': pin,
    };

    console.log(JSON.stringify(result, null, 2));

})();

