// This is called with the results from from FB.getLoginStatus().
let fbHelper = {
    statusChangeCallback : function(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI();
    } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Login with Facebook ';
    } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Login with Facebook ';
    }
    },
    // This function is called when someone finishes with the Login
    // Button. See the onlogin handler attached to it in the sample
    // code below.
    checkLoginState: function() {
        FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        });
        }
}