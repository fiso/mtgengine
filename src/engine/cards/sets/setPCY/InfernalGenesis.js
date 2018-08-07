"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalGenesis extends UnimplementedCard {
  constructor (game) {
    super(game, "Infernal Genesis", "Prophecy", "PCY");
  }
}

module.exports = InfernalGenesis;
