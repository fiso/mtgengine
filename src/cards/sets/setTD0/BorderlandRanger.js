"use strict";
const Constants = require ("../../../Constants");
const BorderlandRangerBase = require("../setE02/BorderlandRanger");

class BorderlandRanger extends BorderlandRangerBase {
  constructor (game) {
    super(game, "Borderland Ranger", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = BorderlandRanger;
