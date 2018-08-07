"use strict";
const Constants = require ("../../../Constants");
const HypnoticSpecterBase = require("../setM10/HypnoticSpecter");

class HypnoticSpecter extends HypnoticSpecterBase {
  constructor (game) {
    super(game, "Hypnotic Specter", "Magic Player Rewards 2006", "P06");
  }
}

module.exports = HypnoticSpecter;
