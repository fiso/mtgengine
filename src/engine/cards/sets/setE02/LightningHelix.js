"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningHelix extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Helix", "Explorers of Ixalan", "E02");
  }
}

module.exports = LightningHelix;
