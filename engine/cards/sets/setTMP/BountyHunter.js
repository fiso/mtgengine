"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BountyHunter extends Card {
  constructor(game) {
    super(game, "Bounty Hunter", "Tempest", "TMP");
  }
}

module.exports = BountyHunter;
