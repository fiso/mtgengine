"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IllicitAuction extends Card {
  constructor(game) {
    super(game, "Illicit Auction", "Classic Sixth Edition", "6ED");
  }
}

module.exports = IllicitAuction;
