"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrullSurgeon extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrull Surgeon", "Tempest Remastered", "TPR");
  }
}

module.exports = ThrullSurgeon;
