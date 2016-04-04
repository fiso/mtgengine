"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreatHart extends Card {
  constructor(game) {
    super(game, "Great Hart", "Born of the Gods", "BNG");
  }
}

module.exports = GreatHart;
