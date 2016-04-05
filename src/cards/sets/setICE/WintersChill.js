"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WintersChill extends UnimplementedCard {
  constructor(game) {
    super(game, "Winter's Chill", "Ice Age", "ICE");
  }
}

module.exports = WintersChill;
