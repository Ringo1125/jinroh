/**jinroh/main.js
 * 2013/08/01 by Ringo1125
 */
/**
 * @class Player describes player of this game.
 * @Constructor
 * @param {String}name
 *            name of player.
 * @param {number}role
 *            role of player.
 * @Extends Backbone.model
 */
var Player = Backbone.Model.extend({// instance property
	defaults : {
		name : "Anonymous",// 名無しさん
		role : 0
	// 村人がデフォ
	},

	initialize : function(name, role) {

	},

}, {// class property
	ROLE_VILLAGER : 0,
	ROLE_WEREWOLF : 1,
	ROLE_PSYCHIC : 2,
	ROLE_FORTUNETELLER : 3,
	ROLE_HUNTER : 4,
	ROLE_INSANE : 5,
});
/**
 * @Class GameRoom
 * 
 * 
 */
var GameRoom = Backbone.Collection.extend({// instance property

}, {// class property

});