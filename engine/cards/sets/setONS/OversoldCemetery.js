"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OversoldCemetery extends Card {
  constructor(game) {
    super(game, "Oversold Cemetery", "Onslaught", "ONS");
  }
}

module.exports = OversoldCemetery;
