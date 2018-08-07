"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DingusEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Dingus Egg", "Eighth Edition", "8ED");
  }
}

module.exports = DingusEgg;
