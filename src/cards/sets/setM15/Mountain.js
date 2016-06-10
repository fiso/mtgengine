"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setATH/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Mountain;
