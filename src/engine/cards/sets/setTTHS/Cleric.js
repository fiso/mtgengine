"use strict";
const Constants = require ("../../../Constants");
const ClericBase = require("../setTDOM/Cleric");

class Cleric extends ClericBase {
  constructor (game) {
    super(game, "Cleric", "Theros Tokens", "TTHS");
  }
}

module.exports = Cleric;
