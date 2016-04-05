"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PardicMiner extends UnimplementedCard {
  constructor(game) {
    super(game, "Pardic Miner", "Odyssey", "ODY");
  }
}

module.exports = PardicMiner;
