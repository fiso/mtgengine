"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForcedRetreat extends Card {
  constructor(game) {
    super(game, "Forced Retreat", "Masters Edition III", "ME3");
  }
}

module.exports = ForcedRetreat;
