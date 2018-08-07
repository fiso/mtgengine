"use strict";
const Constants = require ("../../../Constants");
const StonehewerGiantBase = require("../setMMA/StonehewerGiant");

class StonehewerGiant extends StonehewerGiantBase {
  constructor (game) {
    super(game, "Stonehewer Giant", "Morningtide", "MOR");
  }
}

module.exports = StonehewerGiant;
