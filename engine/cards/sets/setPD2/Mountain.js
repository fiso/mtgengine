"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setATH/Mountain");

class Mountain extends MountainBase {
  constructor(game) {
    super(game, "Mountain", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = Mountain;
