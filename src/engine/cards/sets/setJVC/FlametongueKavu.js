"use strict";
const Constants = require ("../../../Constants");
const FlametongueKavuBase = require("../setCM2/FlametongueKavu");

class FlametongueKavu extends FlametongueKavuBase {
  constructor (game) {
    super(game, "Flametongue Kavu", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = FlametongueKavu;
