"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostfireBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostfire Blade", "Ugin's Fate", "UGIN");
  }
}

module.exports = GhostfireBlade;
