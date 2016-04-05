"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PossessedPortal extends UnimplementedCard {
  constructor(game) {
    super(game, "Possessed Portal", "Fifth Dawn", "5DN");
  }
}

module.exports = PossessedPortal;
