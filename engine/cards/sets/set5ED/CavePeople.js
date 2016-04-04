"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CavePeople extends Card {
  constructor(game) {
    super(game, "Cave People", "Fifth Edition", "5ED");
  }
}

module.exports = CavePeople;
