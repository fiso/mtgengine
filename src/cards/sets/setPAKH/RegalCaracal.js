"use strict";
const Constants = require ("../../../Constants");
const RegalCaracalBase = require("../setAKH/RegalCaracal");

class RegalCaracal extends RegalCaracalBase {
  constructor (game) {
    super(game, "Regal Caracal", "Amonkhet Promos", "PAKH");
  }
}

module.exports = RegalCaracal;
