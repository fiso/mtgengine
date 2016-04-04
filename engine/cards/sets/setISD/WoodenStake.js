"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodenStake extends Card {
  constructor(game) {
    super(game, "Wooden Stake", "Innistrad", "ISD");
  }
}

module.exports = WoodenStake;
