"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyPossession extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Possession", "Innistrad", "ISD");
  }
}

module.exports = GhostlyPossession;
