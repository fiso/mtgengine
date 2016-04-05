"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarFlare extends UnimplementedCard {
  constructor(game) {
    super(game, "War Flare", "Fate Reforged", "FRF");
  }
}

module.exports = WarFlare;
