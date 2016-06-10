"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyshroudCondor extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyshroud Condor", "Tempest", "TMP");
  }
}

module.exports = SkyshroudCondor;
