"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NobleSteeds extends Card {
  constructor(game) {
    super(game, "Noble Steeds", "Alliances", "ALL");
  }
}

module.exports = NobleSteeds;
