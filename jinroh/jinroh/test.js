/**
 * jinroh/test.js 2013/08/07 by Yukino
 */
$(document).ready(function($) {
	// alert("get ready");
	$("#role-custom").click(function() {
		// alert("checked");
		if (this.checked) {
			$("#config-number-option").show("nornal", function() {
				// alert("showing!");
			});
		} else {
			$("#config-number-option").hide("nornal", function() {
				// alert("see you!");
			});
		}
	});
});