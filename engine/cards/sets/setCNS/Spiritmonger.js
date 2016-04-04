"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritmongerBase = require("../setAPC/Spiritmonger.js");

class Spiritmonger extends SpiritmongerBase {
  constructor(game) {
    super(game, "Spiritmonger", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Spiritmonger;
