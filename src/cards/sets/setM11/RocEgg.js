"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RocEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Roc Egg", "Magic 2011", "M11");
  }
}

module.exports = RocEgg;
