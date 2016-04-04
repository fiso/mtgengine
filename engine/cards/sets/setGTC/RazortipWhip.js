"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazortipWhip extends Card {
  constructor(game) {
    super(game, "Razortip Whip", "Gatecrash", "GTC");
  }
}

module.exports = RazortipWhip;
