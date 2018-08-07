"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setC18/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Mountain;
