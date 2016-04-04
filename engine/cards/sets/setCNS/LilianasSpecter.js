"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LilianasSpecterBase = require("../setM11/LilianasSpecter.js");

class LilianasSpecter extends LilianasSpecterBase {
  constructor(game) {
    super(game, "Liliana's Specter", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = LilianasSpecter;
