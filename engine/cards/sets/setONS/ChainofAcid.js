"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChainofAcid extends UnimplementedCard {
  constructor(game) {
    super(game, "Chain of Acid", "Onslaught", "ONS");
  }
}

module.exports = ChainofAcid;
