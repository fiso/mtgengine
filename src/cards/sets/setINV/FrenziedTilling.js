"use strict";
const Constants = require ("../../../Constants");
const FrenziedTillingBase = require("../setGTC/FrenziedTilling");

class FrenziedTilling extends FrenziedTillingBase {
  constructor(game) {
    super(game, "Frenzied Tilling", "Invasion", "INV");
  }
}

module.exports = FrenziedTilling;
