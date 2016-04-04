"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimicBasilisk extends Card {
  constructor(game) {
    super(game, "Simic Basilisk", "Dissension", "DIS");
  }
}

module.exports = SimicBasilisk;
