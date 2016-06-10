"use strict";
const Constants = require ("../../../Constants");
const GreaterGoodBase = require("../setpJGP/GreaterGood");

class GreaterGood extends GreaterGoodBase {
  constructor (game) {
    super(game, "Greater Good", "Ninth Edition", "9ED");
  }
}

module.exports = GreaterGood;
