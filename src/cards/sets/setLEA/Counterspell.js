"use strict";
const Constants = require ("../../../Constants");
const CounterspellBase = require("../setBRB/Counterspell");

class Counterspell extends CounterspellBase {
  constructor(game) {
    super(game, "Counterspell", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Counterspell;
