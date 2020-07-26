//import { saveEmail } from "./email-input";
const { saveEmail } = require("../email-input");
/*
	1.  Accept text (not null/empty)
	2.  Validate text as an email address
		a. recipient 
			i.  alphanumeric
			ii. 64 characters in length
		b. @ (must have at least one, and only one)
		c. Valid domain name
			i.  253 character max
			ii. alphanumeric
			iii. ends with valid top level domain (like .com)
	3.  Save valid email address
*/

describe("given user enters empty email", () => {

	test("when null, then a validation error occurs", () => {
		expect(() => { saveEmail(null) }).toThrow();
	});

	test("when undefined, then a validation error occurs", () => {
		expect(() => { saveEmail(undefined) }).toThrow();
	});

	test("when empty string, then a validation error occurs", () => {
		expect(() => { saveEmail("") }).toThrow();
	});

	test("when spaces, then a validation error occurs", () => {
		expect(() => { saveEmail("  ") }).toThrow();
	});


});