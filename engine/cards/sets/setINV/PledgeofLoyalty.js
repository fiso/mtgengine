"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PledgeofLoyalty extends Card {
  constructor(game) {
    super(game, "Pledge of Loyalty", "Invasion", "INV");
  }
}

module.exports = PledgeofLoyalty;
