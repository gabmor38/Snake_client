let connection;

const handlerUserInput = function() {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: down");
  }
  if (key === "s") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handlerUserInput(key));
  return stdin;
};

setupInput();