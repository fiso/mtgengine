"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NiveousWisps extends UnimplementedCard {
  constructor(game) {
    super(game, "Niveous Wisps", "Shadowmoor", "SHM");
  }
}

module.exports = NiveousWisps;
