import prompts from 'prompts';

var toDoList = [];

const main = async () => {
    const todoMenu = async() => {
        return await prompts({
            type: 'select',
            name: 'value',
            message: 'What action to perform?',
            choices: [
                {title: "Show todo list", value: "S"},
                {title: "Add to todo list", value: "A"},
                {title: "Delete a todo list item", value: "D"},
                {title: "Quit todo list", value: "Q"},
            ],
    });
};

const addTodo = async() => {
    return await prompts({
        type: 'test',
        name: 'value',
        message: 'Whatis your new todo item?',
    });
    
};
//    var message = await nextTodo();
 //   console.log(message);


const showTodo = () => {
    console.log("======================");
        toDoList.forEach( (x) => console.log(x));
    console.log("======================");
};

var option = {};
do{
    option = await todoMenu();
    switch (option.value){
        case 'S': 
            showTodo();
            break;
        case 'A':
            todoList.push(await addTodo());
            break;

    }
} while(option.value != 'Q');

};

main().catch(console.error);

