const saveEmail = ( email ) => {
	if(typeof email !== "string") {
		throw "Email must be a string";
	}

	if(email.trim() === "") {
		throw "Email cannot be an empty string";
	}

};

module.exports = {
	saveEmail,
}