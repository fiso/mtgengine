"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyPrison extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Prison", "Planechase Anthology", "PCA");
  }
}

module.exports = GhostlyPrison;
