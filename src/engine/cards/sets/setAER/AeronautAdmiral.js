"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AeronautAdmiral extends UnimplementedCard {
  constructor (game) {
    super(game, "Aeronaut Admiral", "Aether Revolt", "AER");
  }
}

module.exports = AeronautAdmiral;
