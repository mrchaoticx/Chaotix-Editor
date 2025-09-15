let editorArea = document.querySelector("#editorArea");
let cLibrary = `[
    {
        "code": "while(%^0^%)",
        "name": "while",
        "type": "statement"
    }
]`;


function addCode(c){
    JSON.parse(cLibrary).forEach(element => {
        if(element.name === c){
            editorArea.textContent += element.code;

            if(element.type == "statement"){
                editorArea.textContent += "\n{\n}"
            }
        }
    });
};
