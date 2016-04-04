"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CourtlyProvocateur extends Card {
  constructor(game) {
    super(game, "Courtly Provocateur", "Magic 2013", "M13");
  }
}

module.exports = CourtlyProvocateur;
