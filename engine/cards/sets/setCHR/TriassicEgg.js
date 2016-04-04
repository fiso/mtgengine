"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TriassicEgg extends UnimplementedCard {
  constructor(game) {
    super(game, "Triassic Egg", "Chronicles", "CHR");
  }
}

module.exports = TriassicEgg;
