"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofVipers extends Card {
  constructor(game) {
    super(game, "Wall of Vipers", "Prophecy", "PCY");
  }
}

module.exports = WallofVipers;
