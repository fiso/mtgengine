"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrovikanPlague extends Card {
  constructor(game) {
    super(game, "Krovikan Plague", "Alliances", "ALL");
  }
}

module.exports = KrovikanPlague;
