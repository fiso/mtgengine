"use strict";
const Constants = require ("../../../Constants");
const CourtHussarBase = require("../setA25/CourtHussar");

class CourtHussar extends CourtHussarBase {
  constructor (game) {
    super(game, "Court Hussar", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = CourtHussar;
