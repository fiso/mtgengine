"use strict";
const Constants = require ("../../../Constants");
const CounterspellBase = require("../setSS1/Counterspell");

class Counterspell extends CounterspellBase {
  constructor (game) {
    super(game, "Counterspell", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Counterspell;
