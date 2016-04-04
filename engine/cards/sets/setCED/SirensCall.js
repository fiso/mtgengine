"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SirensCall extends Card {
  constructor(game) {
    super(game, "Siren's Call", "Collector's Edition", "CED");
  }
}

module.exports = SirensCall;
