define(["AppFactSamp/Test Cases/testcaseOne_data","AppFactSamp/Test Cases/testcaseTwo_data"], function() {
	describe("AppFactSamp/Test Suites/testSuite1", function() {
		it("AppFactSamp/testcaseOne", async function() {
			var _data = testcaseData_1641795971517.dataset;
			await kony.automation.playback.waitFor(["AppFactSamp/Form1","rbg1"]);
			kony.automation.radiobuttongroup.click(["AppFactSamp/Form1","rbg1"], _data.input.rbg1);
			kony.automation.listbox.selectItem(["AppFactSamp/Form1","lbx"], "lb3");
			kony.automation.button.click(["AppFactSamp/Form1","btn"]);
		});
		
		it("AppFactSamp/testcaseTwo", async function() {
			var _data = testcaseData_1641796008101.dataset;
			await kony.automation.playback.waitFor(["AppFactSamp/Form2","txt1"]);
			kony.automation.textbox.enterText(["AppFactSamp/Form2","txt1"],_data.input.txt1);
			kony.automation.textarea.enterText(["AppFactSamp/Form2","txtA1"],_data.input.txtA1);
			kony.automation.button.click(["AppFactSamp/Form2","btn"]);
		});
	});
});