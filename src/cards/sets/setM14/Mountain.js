"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setATH/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Mountain;
