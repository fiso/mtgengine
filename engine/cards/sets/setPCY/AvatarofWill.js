"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvatarofWill extends Card {
  constructor(game) {
    super(game, "Avatar of Will", "Prophecy", "PCY");
  }
}

module.exports = AvatarofWill;
