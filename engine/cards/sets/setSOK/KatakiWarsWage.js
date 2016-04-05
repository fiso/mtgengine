"use strict";
const Constants = require ("../../../Constants");
const KatakiWarsWageBase = require("../setMD1/KatakiWarsWage");

class KatakiWarsWage extends KatakiWarsWageBase {
  constructor(game) {
    super(game, "Kataki, War's Wage", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KatakiWarsWage;
