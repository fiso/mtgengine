"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyWings extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Wings", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GhostlyWings;
