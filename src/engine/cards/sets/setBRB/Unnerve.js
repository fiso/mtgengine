"use strict";
const Constants = require ("../../../Constants");
const UnnerveBase = require("../setCM2/Unnerve");

class Unnerve extends UnnerveBase {
  constructor (game) {
    super(game, "Unnerve", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Unnerve;
