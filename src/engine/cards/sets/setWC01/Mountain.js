"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setC18/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Mountain;
