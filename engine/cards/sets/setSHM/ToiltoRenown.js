"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ToiltoRenown extends Card {
  constructor(game) {
    super(game, "Toil to Renown", "Shadowmoor", "SHM");
  }
}

module.exports = ToiltoRenown;
