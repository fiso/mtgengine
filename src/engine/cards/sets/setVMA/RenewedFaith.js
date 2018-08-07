"use strict";
const Constants = require ("../../../Constants");
const RenewedFaithBase = require("../setA25/RenewedFaith");

class RenewedFaith extends RenewedFaithBase {
  constructor (game) {
    super(game, "Renewed Faith", "Vintage Masters", "VMA");
  }
}

module.exports = RenewedFaith;
