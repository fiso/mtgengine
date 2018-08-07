"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AscendingAven extends UnimplementedCard {
  constructor (game) {
    super(game, "Ascending Aven", "Onslaught", "ONS");
  }
}

module.exports = AscendingAven;
