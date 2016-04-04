"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarshmistTitan extends Card {
  constructor(game) {
    super(game, "Marshmist Titan", "Born of the Gods", "BNG");
  }
}

module.exports = MarshmistTitan;
