"use strict";
const Constants = require ("../../../Constants");
const UnnerveBase = require("../setCM2/Unnerve");

class Unnerve extends UnnerveBase {
  constructor (game) {
    super(game, "Unnerve", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Unnerve;
