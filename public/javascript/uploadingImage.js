AlleRecipe.controller("uploadctrl", function($scope, $http) {
    File.prototype.convertToBase64 = function(callback){
        var reader = new FileReader();
        reader.onloadend = function (e) {
            callback(e.target.result, e.target.error);
        };   
        reader.readAsDataURL(this);
    };
    
    function submitForm() {
       //document.forms["uploadform"].submit();
       
       document.getElementById('imgupload').files[0].convertToBase64(function(base64) {
            $http({
                method: "post",
                url: "/predict",
                data: {'picture': base64},
                headers : {
                    'Content-Type': 'application/json'
                }})
                .then(function(res) {
                    alert("success");
                }, function(err) {
                    alert(err)
                });           
       });
   }
    
    function imageToBase64(img)
    {
        var canvas, ctx, dataURL, base64;
        canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL("image/png");
        base64 = dataURL.replace(/^data:image\/png;base64,/, "");
        return base64;
    }
    
    $("#imgupload").change(submitForm);
   
   $scope.uploadPicture = function() {
       document.getElementById('imgupload').click();
   }
});