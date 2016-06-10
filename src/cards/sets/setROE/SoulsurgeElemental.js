"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulsurgeElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulsurge Elemental", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SoulsurgeElemental;
