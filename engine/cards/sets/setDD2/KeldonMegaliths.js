"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KeldonMegalithsBase = require("../setDD3_JVC/KeldonMegaliths.js");

class KeldonMegaliths extends KeldonMegalithsBase {
  constructor(game) {
    super(game, "Keldon Megaliths", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = KeldonMegaliths;
