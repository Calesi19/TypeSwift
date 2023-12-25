const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./mydb.sqlite3', (err: { message: any; }) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS shortcuts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      shortcut TEXT NOT NULL,
      phrase TEXT NOT NULL
  )`);
});

db.close((err: { message: any; }) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

