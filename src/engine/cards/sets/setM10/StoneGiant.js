"use strict";
const Constants = require ("../../../Constants");
const StoneGiantBase = require("../setDDI/StoneGiant");

class StoneGiant extends StoneGiantBase {
  constructor (game) {
    super(game, "Stone Giant", "Magic 2010", "M10");
  }
}

module.exports = StoneGiant;
