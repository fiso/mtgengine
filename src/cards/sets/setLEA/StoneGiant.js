"use strict";
const Constants = require ("../../../Constants");
const StoneGiantBase = require("../setCED/StoneGiant");

class StoneGiant extends StoneGiantBase {
  constructor (game) {
    super(game, "Stone Giant", "Limited Edition Alpha", "LEA");
  }
}

module.exports = StoneGiant;
