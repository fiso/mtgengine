"use strict";
const Constants = require ("../../../Constants");
const CounterspellBase = require("../setBRB/Counterspell");

class Counterspell extends CounterspellBase {
  constructor(game) {
    super(game, "Counterspell", "Revised Edition", "3ED");
  }
}

module.exports = Counterspell;
