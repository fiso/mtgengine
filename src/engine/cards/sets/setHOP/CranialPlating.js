"use strict";
const Constants = require ("../../../Constants");
const CranialPlatingBase = require("../setC16/CranialPlating");

class CranialPlating extends CranialPlatingBase {
  constructor (game) {
    super(game, "Cranial Plating", "Planechase", "HOP");
  }
}

module.exports = CranialPlating;
