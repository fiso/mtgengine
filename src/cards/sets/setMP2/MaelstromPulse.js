"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaelstromPulse extends UnimplementedCard {
  constructor (game) {
    super(game, "Maelstrom Pulse", "Amonkhet Invocations", "MP2");
  }
}

module.exports = MaelstromPulse;
