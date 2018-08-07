"use strict";
const Constants = require ("../../../Constants");
const GhastlyConscriptionBase = require("../setC16/GhastlyConscription");

class GhastlyConscription extends GhastlyConscriptionBase {
  constructor (game) {
    super(game, "Ghastly Conscription", "Fate Reforged", "FRF");
  }
}

module.exports = GhastlyConscription;
