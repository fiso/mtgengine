"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreaterGoodBase = require("../setpJGP/GreaterGood.js");

class GreaterGood extends GreaterGoodBase {
  constructor(game) {
    super(game, "Greater Good", "Urza's Saga", "USG");
  }
}

module.exports = GreaterGood;
