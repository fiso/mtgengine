"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreelMindRaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Greel, Mind Raker", "Prophecy", "PCY");
  }
}

module.exports = GreelMindRaker;
