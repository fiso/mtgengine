"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmsDealer extends Card {
  constructor(game) {
    super(game, "Arms Dealer", "Magic 2013", "M13");
  }
}

module.exports = ArmsDealer;
