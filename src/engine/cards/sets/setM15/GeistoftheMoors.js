"use strict";
const Constants = require ("../../../Constants");
const GeistoftheMoorsBase = require("../setA25/GeistoftheMoors");

class GeistoftheMoors extends GeistoftheMoorsBase {
  constructor (game) {
    super(game, "Geist of the Moors", "Magic 2015", "M15");
  }
}

module.exports = GeistoftheMoors;
