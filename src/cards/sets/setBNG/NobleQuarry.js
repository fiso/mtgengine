"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleQuarry extends UnimplementedCard {
  constructor (game) {
    super(game, "Noble Quarry", "Born of the Gods", "BNG");
  }
}

module.exports = NobleQuarry;
