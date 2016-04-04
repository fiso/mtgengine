"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EliteSkirmisher extends Card {
  constructor(game) {
    super(game, "Elite Skirmisher", "Born of the Gods", "BNG");
  }
}

module.exports = EliteSkirmisher;
