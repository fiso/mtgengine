"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setC18/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Mountain;
