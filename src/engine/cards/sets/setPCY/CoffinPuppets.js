"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoffinPuppets extends UnimplementedCard {
  constructor (game) {
    super(game, "Coffin Puppets", "Prophecy", "PCY");
  }
}

module.exports = CoffinPuppets;
