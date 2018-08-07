"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonstrousHound extends UnimplementedCard {
  constructor (game) {
    super(game, "Monstrous Hound", "Magic Online Promos", "PRM");
  }
}

module.exports = MonstrousHound;
