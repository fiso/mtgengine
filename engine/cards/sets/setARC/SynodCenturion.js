"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SynodCenturion extends Card {
  constructor(game) {
    super(game, "Synod Centurion", "Archenemy", "ARC");
  }
}

module.exports = SynodCenturion;
