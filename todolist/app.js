$(function() {
    let buttonEnter = $('#enter');
    buttonEnter.click(function(){
        createTodo();
    })
    let userInput = $('#userInput');
    let ul = $('ul');
    let localStorage = window.localStorage;
    let itemMap = [
        {
            ind:1,
            text:'sample'
        }
    ]
    
    function inputLength(){
        return !!userInput.val();
    }
    
    function createTodo(){
        let li = $("<li>");
        li.animate(
            {
                'margin-right': '50',
                'margin-left': '50'
            }, {duration:1000, queue:false}
        ).fadeIn(750);
        li.append(document.createTextNode(userInput.val()));
        ul.append(li);
        itemMap.push(
            {
                ind:itemMap.length+1,
                text:userInput.val()
            }
        )
        localStorage.setItem('Todo_items', JSON.stringify(itemMap));
        userInput.val('');
        li.click(function() {
            li.toggleClass('done');
        });
    
        let deleteButton = $('<button>');
        deleteButton.append(document.createTextNode('X'));
        li.append(deleteButton);
        deleteButton.click(deleteTododItem);
    
        function deleteTododItem(){
            li.toggleClass('done');
            li.animate(
                {
                    'margin-right': '-=100',
                    'margin-left': '+=100'
                }, {duration:1000, queue:false}
            ).fadeOut(1500);
        }
    
    function changeListAfterKeypress(event) {
        if (inputLength() && event.which === 13) {
            createTodo()
        }
    }
    
    userInput.keypress(changeListAfterKeypress);
})

