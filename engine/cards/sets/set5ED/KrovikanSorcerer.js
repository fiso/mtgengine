"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrovikanSorcerer extends Card {
  constructor(game) {
    super(game, "Krovikan Sorcerer", "Fifth Edition", "5ED");
  }
}

module.exports = KrovikanSorcerer;
