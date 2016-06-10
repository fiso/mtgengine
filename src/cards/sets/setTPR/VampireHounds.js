"use strict";
const Constants = require ("../../../Constants");
const VampireHoundsBase = require("../setEXO/VampireHounds");

class VampireHounds extends VampireHoundsBase {
  constructor (game) {
    super(game, "Vampire Hounds", "Tempest Remastered", "TPR");
  }
}

module.exports = VampireHounds;
