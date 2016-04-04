"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MineBearer extends Card {
  constructor(game) {
    super(game, "Mine Bearer", "Prophecy", "PCY");
  }
}

module.exports = MineBearer;
