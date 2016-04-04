"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurntOffering extends Card {
  constructor(game) {
    super(game, "Burnt Offering", "Ice Age", "ICE");
  }
}

module.exports = BurntOffering;
