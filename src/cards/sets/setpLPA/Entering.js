"use strict";
const Constants = require ("../../../Constants");
const EnteringBase = require("../setDGM/Entering");

class Entering extends EnteringBase {
  constructor (game) {
    super(game, "Entering", "Launch Parties", "pLPA");
  }
}

module.exports = Entering;
