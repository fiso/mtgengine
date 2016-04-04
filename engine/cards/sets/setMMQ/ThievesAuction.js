"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThievesAuctionBase = require("../set8ED/ThievesAuction.js");

class ThievesAuction extends ThievesAuctionBase {
  constructor(game) {
    super(game, "Thieves' Auction", "Mercadian Masques", "MMQ");
  }
}

module.exports = ThievesAuction;
