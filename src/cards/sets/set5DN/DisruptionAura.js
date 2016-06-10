"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisruptionAura extends UnimplementedCard {
  constructor (game) {
    super(game, "Disruption Aura", "Fifth Dawn", "5DN");
  }
}

module.exports = DisruptionAura;
