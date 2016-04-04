"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HypnoticSpecterBase = require("../setATH/HypnoticSpecter.js");

class HypnoticSpecter extends HypnoticSpecterBase {
  constructor(game) {
    super(game, "Hypnotic Specter", "Limited Edition Alpha", "LEA");
  }
}

module.exports = HypnoticSpecter;
