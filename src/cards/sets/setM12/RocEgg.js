"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RocEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Roc Egg", "Magic 2012", "M12");
  }
}

module.exports = RocEgg;
