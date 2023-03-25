const crypto = require("crypto");

const salt = crypto.randomBytes(8).toString("hex");
console.log(salt);

const bcrypt = require("bcrypt");

const storedHash =
	"$2b$10$ByQW8yIsTcw51RJwKvU6Ge2U6dC3s3Kx6k.3sHsWcFEMKf90gZwIu"; // This is the hash stored in your database
const storedSalt = "3f6ab3c8fae914d1";
const password = "mysecretpassword";

bcrypt.compare(storedSalt + password, storedHash, function (err, result) {
	if (err) {
		// Handle error
	} else if (result) {
		console.log("Password is correct!");
	} else {
		console.log("Password is incorrect!");
	}
});

app.post("/login", bodyParser.urlencoded({ extended: false }), (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	// Retrieve the stored hash and salt from the database
	const storedHash = ""; // Replace with your database query
	const storedSalt = ""; // Replace with your database query

	// Hash the user's password with the stored salt
	bcrypt.hash(password + storedSalt, saltRounds, (err, hashedPassword) => {
		if (err) {
			console.error(err);
			return res.status(500).send("Internal server error");
		}

		// Compare the hashed password with the stored hash
		bcrypt.compare(hashedPassword, storedHash, (err, result) => {
			if (err) {
				console.error(err);
				return res.status(500).send("Internal server error");
			}

			if (result) {
				// Password is correct, log the user in
				return res.send(`Welcome, ${username}!`);
			} else {
				// Password is incorrect, show an error message
				return res.send("Incorrect password");
			}
		});
	});
});
