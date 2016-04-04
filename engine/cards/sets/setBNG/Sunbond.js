"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sunbond extends Card {
  constructor(game) {
    super(game, "Sunbond", "Born of the Gods", "BNG");
  }
}

module.exports = Sunbond;
