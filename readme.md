# Ping-Pong
### Indepndent  project for Arrays and Looping 07/14/2017
## By: Michael Woldemedihin and Lois Choi

# Description
This website takes a number as an input from the user and count to the number or count from the number. While counting, if any of the numbers is divisible by 3 it will replace with "ping", where as if any of the numbers is divisible by 5 it will replace it with "pong", or otherwise if it is divisible by 15, it will replace it with "ping-pong".

# Setup
Clone this repository.
Then open the index.html file using your favorite browser. Or click the link below.
- gh-pages: https://mwoldemedihin.github.io/Ping-Pong/
# Specifications

Behavior | Input | Output
------- | --------| -------
 1. Players input name and click play. | Registration page | Game page
 2. When player clicks "roll dice" button, a random number will show and be added to "round score"| Click "roll dice" | Random number 1-6; Add random number to "round score"
 3. When player continues to click "roll dice" - if random number is NOT 1, random number is added to "round score" and generate another random number| If 4 | continues generating another random number
 4. When player continues to click "roll dice" - if random number IS 1, round score changes to 0, and current player button is disabled, and the other players button is enabled| 1 | Round score = 0, current player button disabled, other player button enabled and vice versa.
 5. When the "hold" button is clicked, the current players "roll dice" button will be disabled, the other players button will be enabled, and the current score will be added to the players total score. Then the current score will be reset to the other players total.| |
 6. Repeat specifications 1-4 for other player2| |
 7. When a players total score >=100 a congratulations alert will appear with players name, and the game will be reset| Player 1 = 104 | "congratulations player 1" and reset game, optional exit button to redirect to the registration page

# Known Bugs

_No known bugs_

# Technologies Used

- HTML
- CSS
- Bootstrap
- Javascript
- jQuery

# Legal
Copyright (c) 2017, Michael Woldemedihin & Lois Choi

This software is licensed under the MIT license.
