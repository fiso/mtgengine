"use strict";
const Constants = require ("../../../Constants");
const VampireHoundsBase = require("../setTPR/VampireHounds");

class VampireHounds extends VampireHoundsBase {
  constructor (game) {
    super(game, "Vampire Hounds", "Exodus", "EXO");
  }
}

module.exports = VampireHounds;
