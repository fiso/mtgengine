var Utils = require("../Utils");

function MTGObject(game) {
	Utils.assert(game);
	this._game = game;
}

MTGObject.prototype = {
};

module.exports = MTGObject;
