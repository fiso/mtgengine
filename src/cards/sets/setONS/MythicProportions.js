"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MythicProportions extends UnimplementedCard {
  constructor(game) {
    super(game, "Mythic Proportions", "Onslaught", "ONS");
  }
}

module.exports = MythicProportions;
