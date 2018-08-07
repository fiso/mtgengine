"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Captain", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishCaptain;
