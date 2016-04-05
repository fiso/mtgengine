"use strict";
const Constants = require ("../../../Constants");
const UnnerveBase = require("../setBRB/Unnerve");

class Unnerve extends UnnerveBase {
  constructor(game) {
    super(game, "Unnerve", "Urza's Saga", "USG");
  }
}

module.exports = Unnerve;
