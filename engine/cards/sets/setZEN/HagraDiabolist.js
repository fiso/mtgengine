"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HagraDiabolist extends UnimplementedCard {
  constructor(game) {
    super(game, "Hagra Diabolist", "Zendikar", "ZEN");
  }
}

module.exports = HagraDiabolist;
