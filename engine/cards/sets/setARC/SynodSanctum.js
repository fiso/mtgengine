"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SynodSanctum extends Card {
  constructor(game) {
    super(game, "Synod Sanctum", "Archenemy", "ARC");
  }
}

module.exports = SynodSanctum;
