"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DriftoftheDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Drift of the Dead", "Masters Edition II", "ME2");
  }
}

module.exports = DriftoftheDead;
