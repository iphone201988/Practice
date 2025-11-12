function loadscript(src,callback){
    let script = document.createElement("script")
    script.src=src;
    script.onload=function(){
        console.log("Script loaded with src"+src)
        callback(null,src)
    }
    script.onerror=function(){
        console.log("Error loading with src"+src)
        callback(new Error);
    }
    document.body.appendChild(script)
}
function yo(error,src){
    if(error){
        console.log("error")
        return
    }
    console.log("hello "+src)
}
function gm(error,src){
    if(error){
        console.log("error")
        return
    }
    console.log("GoodMorning "+src)
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",gm)