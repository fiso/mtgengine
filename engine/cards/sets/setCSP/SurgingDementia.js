"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurgingDementia extends Card {
  constructor(game) {
    super(game, "Surging Dementia", "Coldsnap", "CSP");
  }
}

module.exports = SurgingDementia;
