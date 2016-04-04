"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaraudingKnight extends UnimplementedCard {
  constructor(game) {
    super(game, "Marauding Knight", "Invasion", "INV");
  }
}

module.exports = MaraudingKnight;
