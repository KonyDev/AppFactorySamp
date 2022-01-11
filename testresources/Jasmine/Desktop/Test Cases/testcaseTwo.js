it("AppFactSamp/testcaseTwo", async function() {
	var _data = testcaseData_1641796008101.dataset;
	await kony.automation.playback.waitFor(["AppFactSamp/Form2","txt1"]);
	kony.automation.textbox.enterText(["AppFactSamp/Form2","txt1"],_data.input.txt1);
	kony.automation.textarea.enterText(["AppFactSamp/Form2","txtA1"],_data.input.txtA1);
	kony.automation.button.click(["AppFactSamp/Form2","btn"]);
});