"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DingusEgg extends UnimplementedCard {
  constructor(game) {
    super(game, "Dingus Egg", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DingusEgg;
