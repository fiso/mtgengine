"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaelstromPulse extends UnimplementedCard {
  constructor (game) {
    super(game, "Maelstrom Pulse", "Alara Reborn", "ARB");
  }
}

module.exports = MaelstromPulse;
