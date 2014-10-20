var ready;
ready = function() {  
    $("#webcam").scriptcam({
        showMicrophoneErrors:false,
        onError:onError,
        cornerRadius:20,
        disableHardwareAcceleration:1,
        cornerColor:'e3e5e2',
        onWebcamReady:onWebcamReady,
        uploadImage:'upload.gif',
        onPictureAsBase64:base64_tofield_and_image
    });
}
    
    $(document).ready(ready);
    $(document).on('page:load', ready);
    function base64_tofield() {
        $('#formfield').val($.scriptcam.getFrameAsBase64());
    };
    function base64_toimage() {
        $('#image').attr("src","data:image/png;base64,"+$.scriptcam.getFrameAsBase64());
    };
    function base64_tofield_and_image(b64) {
        $('#formfield').val(b64);
        $('#image').attr("src","data:image/png;base64,"+b64);
    };
    function changeCamera() {
        $.scriptcam.changeCamera($('#cameraNames').val());
    }
    function onError(errorId,errorMsg) {
        $( "#btn1" ).attr( "disabled", true );
        $( "#btn2" ).attr( "disabled", true );
        alert(errorMsg);
    }           
    function onWebcamReady(cameraNames,camera,microphoneNames,microphone,volume) {
        $.each(cameraNames, function(index, text) {
            $('#cameraNames').append( $('<option></option>').val(index).html(text) )
        }); 
        $('#cameraNames').val(camera);
    }
