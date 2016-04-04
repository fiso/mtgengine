"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrugaJungle extends Card {
  constructor(game) {
    super(game, "Truga Jungle", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TrugaJungle;
