"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RenewedFaithBase = require("../setONS/RenewedFaith.js");

class RenewedFaith extends RenewedFaithBase {
  constructor(game) {
    super(game, "Renewed Faith", "Vintage Masters", "VMA");
  }
}

module.exports = RenewedFaith;
