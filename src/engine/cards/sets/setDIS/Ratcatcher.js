"use strict";
const Constants = require ("../../../Constants");
const RatcatcherBase = require("../setA25/Ratcatcher");

class Ratcatcher extends RatcatcherBase {
  constructor (game) {
    super(game, "Ratcatcher", "Dissension", "DIS");
  }
}

module.exports = Ratcatcher;
