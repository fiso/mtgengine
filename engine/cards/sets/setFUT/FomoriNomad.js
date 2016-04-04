"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FomoriNomad extends Card {
  constructor(game) {
    super(game, "Fomori Nomad", "Future Sight", "FUT");
  }
}

module.exports = FomoriNomad;
