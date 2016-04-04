"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlessedWine extends Card {
  constructor(game) {
    super(game, "Blessed Wine", "Fifth Edition", "5ED");
  }
}

module.exports = BlessedWine;
