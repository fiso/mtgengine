"use strict";
const Constants = require ("../../../Constants");
const IllicitAuctionBase = require("../set6ED/IllicitAuction");

class IllicitAuction extends IllicitAuctionBase {
  constructor(game) {
    super(game, "Illicit Auction", "Mirage", "MIR");
  }
}

module.exports = IllicitAuction;
