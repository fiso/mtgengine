"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverWall extends UnimplementedCard {
  constructor(game) {
    super(game, "Quicksilver Wall", "Prophecy", "PCY");
  }
}

module.exports = QuicksilverWall;
