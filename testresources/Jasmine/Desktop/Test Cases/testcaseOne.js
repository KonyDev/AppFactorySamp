it("AppFactSamp/testcaseOne", async function() {
	var _data = testcaseData_1641795971517.dataset;
	await kony.automation.playback.waitFor(["AppFactSamp/Form1","rbg1"]);
	kony.automation.radiobuttongroup.click(["AppFactSamp/Form1","rbg1"], _data.input.rbg1);
	kony.automation.listbox.selectItem(["AppFactSamp/Form1","lbx"], "lb3");
	kony.automation.button.click(["AppFactSamp/Form1","btn"]);
});