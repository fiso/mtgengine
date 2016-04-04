"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IllicitAuctionBase = require("../set6ED/IllicitAuction.js");

class IllicitAuction extends IllicitAuctionBase {
  constructor(game) {
    super(game, "Illicit Auction", "Mirage", "MIR");
  }
}

module.exports = IllicitAuction;
