/**
 * jinroh/test.js 2013/08/10 by Yukino
 */
$(document).ready(function($) {
	alert("get ready");
	var template = '<p>' + '<h1>hi!{{#name}}!</h1><hr />' + 'test</p>';
	var html = mustache.to_html(template, {
		name : mustache
	});
	$("#register").append(html);
});