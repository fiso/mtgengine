"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThievesAuction extends Card {
  constructor(game) {
    super(game, "Thieves' Auction", "Eighth Edition", "8ED");
  }
}

module.exports = ThievesAuction;
