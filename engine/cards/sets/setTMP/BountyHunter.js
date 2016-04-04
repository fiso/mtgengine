"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BountyHunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Bounty Hunter", "Tempest", "TMP");
  }
}

module.exports = BountyHunter;
