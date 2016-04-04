"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaggotCarrier extends Card {
  constructor(game) {
    super(game, "Maggot Carrier", "Eighth Edition", "8ED");
  }
}

module.exports = MaggotCarrier;
