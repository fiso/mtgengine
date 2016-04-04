"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenalishHeralds extends Card {
  constructor(game) {
    super(game, "Benalish Heralds", "Invasion", "INV");
  }
}

module.exports = BenalishHeralds;
