"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WingStorm extends Card {
  constructor(game) {
    super(game, "Wing Storm", "Prophecy", "PCY");
  }
}

module.exports = WingStorm;
