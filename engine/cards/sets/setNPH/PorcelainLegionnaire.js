"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PorcelainLegionnaire extends Card {
  constructor(game) {
    super(game, "Porcelain Legionnaire", "New Phyrexia", "NPH");
  }
}

module.exports = PorcelainLegionnaire;
