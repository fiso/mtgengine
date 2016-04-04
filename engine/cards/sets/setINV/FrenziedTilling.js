"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrenziedTillingBase = require("../setGTC/FrenziedTilling.js");

class FrenziedTilling extends FrenziedTillingBase {
  constructor(game) {
    super(game, "Frenzied Tilling", "Invasion", "INV");
  }
}

module.exports = FrenziedTilling;
