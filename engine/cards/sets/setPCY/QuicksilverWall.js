"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuicksilverWall extends Card {
  constructor(game) {
    super(game, "Quicksilver Wall", "Prophecy", "PCY");
  }
}

module.exports = QuicksilverWall;
