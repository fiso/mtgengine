"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhastlyConscription extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghastly Conscription", "Fate Reforged", "FRF");
  }
}

module.exports = GhastlyConscription;
