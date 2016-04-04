"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElderwoodScion extends Card {
  constructor(game) {
    super(game, "Elderwood Scion", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ElderwoodScion;
