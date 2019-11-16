let counter = 0;
$ (document).ready(function () {
    console.log('JQ Loaded');

    $ ('#generateID').on('click', function(){
        counter ++;
        let displayCounter = $ ('#buttonDiv');
        let outputString = `<div class="ketchup">`;
        outputString += `<button type="button" id="swapButton" 
                             class="btn-success">Swap</button> <button type="button" id="deleteButton"
                            class="btn-delete">Delete</button>`
        outputString += `<pre> </pre> </div>`;
        displayCounter.append(outputString);
    });
    $ (document).on('click', '#swapButton', function(){
        $(this).parent().toggleClass('mustard'); 

        $ (document).on('click', '#deleteButton', function(){
         $(this).parent().remove();
        }); 
    });
});
