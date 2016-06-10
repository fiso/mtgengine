"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setATH/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = Mountain;
