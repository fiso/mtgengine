"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SynodSanctum extends UnimplementedCard {
  constructor(game) {
    super(game, "Synod Sanctum", "Archenemy", "ARC");
  }
}

module.exports = SynodSanctum;
