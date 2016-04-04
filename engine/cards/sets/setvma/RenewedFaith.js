"use strict";
const Constants = require ("../../../Constants");
const RenewedFaithBase = require("../setONS/RenewedFaith");

class RenewedFaith extends RenewedFaithBase {
  constructor(game) {
    super(game, "Renewed Faith", "Vintage Masters", "VMA");
  }
}

module.exports = RenewedFaith;
