"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KatakiWarsWageBase = require("../setMD1/KatakiWarsWage.js");

class KatakiWarsWage extends KatakiWarsWageBase {
  constructor(game) {
    super(game, "Kataki, War's Wage", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KatakiWarsWage;
