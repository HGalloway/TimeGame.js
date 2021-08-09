<h1>iloveyou</h1>

<p>iloveyou is a website that I created for my partner. It gave me a jumpstart into javascript and arduino.</p>

<h2>The Time Game</h2>
<p>The time game is pretty simple. Every hour the message is I love you. If it's in between the hour the message is lovingly dismissive.</p>

<h2>Messages</h2>
<p>Now this component is a little weird. You'd look at it and say "This is a piece of garbage. It's just a text box and a button.". But to get this to work plug a arduino with a
LCD screen attached to it. You can change the module that your LCD uses in the code. Then submit a message in the textbox. Of course on the server side you'll have to run the server code. 
That creates a socket on the server that the client can connect to so that the messages can display on the screen.</p>

<h2>Libraries used:</h2>

* Johhny-FIve (For controlling the arduino)
* http
* socket.io 
