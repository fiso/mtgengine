"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AislingLeprechaun extends UnimplementedCard {
  constructor (game) {
    super(game, "Aisling Leprechaun", "Magic Online Promos", "PRM");
  }
}

module.exports = AislingLeprechaun;
