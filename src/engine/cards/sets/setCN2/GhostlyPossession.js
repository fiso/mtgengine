"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyPossession extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Possession", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GhostlyPossession;
