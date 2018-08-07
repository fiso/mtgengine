"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TriassicEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Triassic Egg", "Masters Edition IV", "ME4");
  }
}

module.exports = TriassicEgg;
