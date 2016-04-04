"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SalvagingStation extends Card {
  constructor(game) {
    super(game, "Salvaging Station", "Fifth Dawn", "5DN");
  }
}

module.exports = SalvagingStation;
