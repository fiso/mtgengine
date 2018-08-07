"use strict";
const Constants = require ("../../../Constants");
const UnnerveBase = require("../setCM2/Unnerve");

class Unnerve extends UnnerveBase {
  constructor (game) {
    super(game, "Unnerve", "Commander 2011", "CMD");
  }
}

module.exports = Unnerve;
