"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RedeemtheLost extends Card {
  constructor(game) {
    super(game, "Redeem the Lost", "Morningtide", "MOR");
  }
}

module.exports = RedeemtheLost;
