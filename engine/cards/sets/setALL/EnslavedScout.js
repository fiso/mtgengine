"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnslavedScout extends Card {
  constructor(game) {
    super(game, "Enslaved Scout", "Alliances", "ALL");
  }
}

module.exports = EnslavedScout;
