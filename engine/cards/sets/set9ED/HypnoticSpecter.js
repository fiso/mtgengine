"use strict";
const Constants = require ("../../../Constants");
const HypnoticSpecterBase = require("../setATH/HypnoticSpecter");

class HypnoticSpecter extends HypnoticSpecterBase {
  constructor(game) {
    super(game, "Hypnotic Specter", "Ninth Edition", "9ED");
  }
}

module.exports = HypnoticSpecter;
