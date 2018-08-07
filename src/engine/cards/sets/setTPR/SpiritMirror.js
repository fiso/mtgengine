"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritMirror extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit Mirror", "Tempest Remastered", "TPR");
  }
}

module.exports = SpiritMirror;
