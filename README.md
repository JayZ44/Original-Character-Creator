Welcome to my Character Creator!
This is a very simple program that still has some bugs to squash and features to develop. I'm also new to programming so try not to mind the errors too hard.

# Run "npm install nanoid@3" first or the program will break!

It can be a bit strange to use so here are some instructions:

    - The commands you can use are "index","create","show","update","destroy", and "obliterate."

    - Please note that the "update" command is not working at the moment, and will yeild unsavory results.

    - To use a command, type `npm run index`. You can replace `index` with the desired command.

    - Some commands need to be given parameters to run properly. Here is the syntax for each of them:

        # 1. Create: This creates a character object with the data provided, and assigns a random id to the character.

        *npm run create `character name` `character personality` `character favorite color` `character ability` `character age`*

        - The commands must be input in this order, and any parameters that are not provided will default to "Unknown". 

        # 2. Index: This displays the id and name of each character that has been created so far. 
        It needs no parameters.

        *npm run index*

        # 3. Show: This takes the id of the character as a parameter and displays all of the character data

        *npm run show `characterId`*

        # 4. Destroy: This deletes a character from the collection.
        It takes the character id as a parameter

        *npm run destroy `characterId`*

        # 5. Obliterate: This deletes all characters from the collection.
        I recommend you run this command first to delete the example characters provided. This command takes no parameters.

        *npm run obliterate*

Alright, that's all the rules and commands for now. The console will make "funny" remarks as you go through the program. Have fun and happy creating!





