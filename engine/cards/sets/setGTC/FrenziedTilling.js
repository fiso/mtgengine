"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrenziedTilling extends Card {
  constructor(game) {
    super(game, "Frenzied Tilling", "Gatecrash", "GTC");
  }
}

module.exports = FrenziedTilling;
