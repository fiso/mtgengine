"use strict";
const Constants = require ("../../../Constants");
const RenewedFaithBase = require("../setA25/RenewedFaith");

class RenewedFaith extends RenewedFaithBase {
  constructor (game) {
    super(game, "Renewed Faith", "World Championship Decks 2003", "WC03");
  }
}

module.exports = RenewedFaith;
