"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanColossus extends UnimplementedCard {
  constructor(game) {
    super(game, "Krosan Colossus", "Onslaught", "ONS");
  }
}

module.exports = KrosanColossus;
