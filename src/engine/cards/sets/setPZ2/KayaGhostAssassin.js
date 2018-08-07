"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KayaGhostAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Kaya, Ghost Assassin", "You Make the Cube", "PZ2");
  }
}

module.exports = KayaGhostAssassin;
