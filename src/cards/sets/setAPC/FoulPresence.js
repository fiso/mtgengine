"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulPresence extends UnimplementedCard {
  constructor(game) {
    super(game, "Foul Presence", "Apocalypse", "APC");
  }
}

module.exports = FoulPresence;
