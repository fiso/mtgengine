"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Hydra", "Nemesis", "NEM");
  }
}

module.exports = AncientHydra;
