"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaFlow extends UnimplementedCard {
  constructor(game) {
    super(game, "Lava Flow", "Masters Edition IV", "ME4");
  }
}

module.exports = LavaFlow;
