function notesRender(){
    let notesData = [];

    async function fetchNotes(){
        try{
            const Response = await fetch('/notes.json');
            if(!Response.ok) throw new Error("Failed to fetch notes");

            notesData =  await Response.json();
            console.log('fetched notes sucessfully' , notesData);

            loadPreview();
            
        }catch(error){
            console.error('error fetching notes', error);
        }
       
    };


    function loadPreview(){
        const mainBox = document.getElementById('main-content');
        mainBox.innerHtml = "";

        notesData.forEach((note, index) =>{
            const previewBox = document.createElement('div');
            previewBox.classList.add('notes-box');


            previewBox.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.description}</P>`;
            

            previewBox.onclick = () => loadNotes(index);
            mainBox.appendChild(previewBox);
        });
    }

    function loadNotes(index){
        const mainBox = document.getElementById('main-content');
        mainBox.innerHtml = "";

        const note =  notesData[index];
        let htmlContent = ``;
        
        //loop through the content 
        note.content.forEach(item =>{
            if(item.type === "paragraph"){
                htmlContent += `<p>${item.description}</p>`;
            }else if(item.type === "table"){
                htmlContent += `<table><thead><tr>`;
                
                //generate table header
                Object.keys(item.data[0]).forEach(header =>{
                    htmlContent += `<th>${header}</th>`;
                });
                htmlContent += `</tr></thead><tbody>`;
                
                //generate table rows
                item.data.forEach(row =>{
                    htmlContent += `<tr>`;
                    
                    Object.values(row).forEach(cell =>{
                        htmlContent += `<td>${cell}</td>`;
                    });
                    htmlContent += `</tr>`;
                });
                htmlContent+= `</tbody></table>`;
                }
            });
            
            const gnHeading = document.getElementById('gn-heading');
            gnHeading.textContent = "";
            gnHeading.innerHTML = `${note.title}`;

            mainBox.innerHTML = htmlContent;
    
    }
    
    // Initialize by fetching notes
    fetchNotes();
}

notesRender();




    