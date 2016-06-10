"use strict";
const Constants = require ("../../../Constants");
const CounterspellBase = require("../setBRB/Counterspell");

class Counterspell extends CounterspellBase {
  constructor (game) {
    super(game, "Counterspell", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Counterspell;
