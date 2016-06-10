"use strict";
const Constants = require ("../../../Constants");
const HypnoticSpecterBase = require("../setATH/HypnoticSpecter");

class HypnoticSpecter extends HypnoticSpecterBase {
  constructor (game) {
    super(game, "Hypnotic Specter", "Tenth Edition", "10E");
  }
}

module.exports = HypnoticSpecter;
