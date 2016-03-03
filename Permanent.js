var Constants = require("./Constants");

function Permanent(owner, controller, card) {
	this._tapState = Constants.tapStates.UNTAPPED;
	this._flipState = Constants.flipStates.NORMAL;
	this._transformState = Constants.transformState.NORMAL;
	this._faceState = Constants.faceState.FACEUP;
	this._owner = owner;
	this._controller = controller;
	this._card = card;
}

Permanent.prototype = {
	
};

module.exports = Permanent;
