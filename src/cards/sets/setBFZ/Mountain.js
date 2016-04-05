"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setATH/Mountain");

class Mountain extends MountainBase {
  constructor(game) {
    super(game, "Mountain", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Mountain;
