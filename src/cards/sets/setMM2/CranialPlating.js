"use strict";
const Constants = require ("../../../Constants");
const CranialPlatingBase = require("../setC16/CranialPlating");

class CranialPlating extends CranialPlatingBase {
  constructor (game) {
    super(game, "Cranial Plating", "Modern Masters 2015", "MM2");
  }
}

module.exports = CranialPlating;
