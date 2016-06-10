"use strict";
const Constants = require ("../../../Constants");
const CranialPlatingBase = require("../set5DN/CranialPlating");

class CranialPlating extends CranialPlatingBase {
  constructor (game) {
    super(game, "Cranial Plating", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CranialPlating;
