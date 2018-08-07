"use strict";
const Constants = require ("../../../Constants");
const ReturnedPhalanxBase = require("../setA25/ReturnedPhalanx");

class ReturnedPhalanx extends ReturnedPhalanxBase {
  constructor (game) {
    super(game, "Returned Phalanx", "Theros", "THS");
  }
}

module.exports = ReturnedPhalanx;
