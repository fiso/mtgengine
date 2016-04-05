"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonstrousHound extends UnimplementedCard {
  constructor(game) {
    super(game, "Monstrous Hound", "Exodus", "EXO");
  }
}

module.exports = MonstrousHound;
