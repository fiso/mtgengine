"use strict";
const Constants = require ("../../../Constants");
const CounterspellBase = require("../setBRB/Counterspell");

class Counterspell extends CounterspellBase {
  constructor (game) {
    super(game, "Counterspell", "Starter 1999", "S99");
  }
}

module.exports = Counterspell;
