"use strict";
const Constants = require ("../../../Constants");
const LiciaSanguineTribuneBase = require("../setC17/LiciaSanguineTribune");

class LiciaSanguineTribune extends LiciaSanguineTribuneBase {
  constructor (game) {
    super(game, "Licia, Sanguine Tribune", "You Make the Cube", "PZ2");
  }
}

module.exports = LiciaSanguineTribune;
