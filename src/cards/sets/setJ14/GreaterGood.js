"use strict";
const Constants = require ("../../../Constants");
const GreaterGoodBase = require("../setBBD/GreaterGood");

class GreaterGood extends GreaterGoodBase {
  constructor (game) {
    super(game, "Greater Good", "Judge Gift Cards 2014", "J14");
  }
}

module.exports = GreaterGood;
