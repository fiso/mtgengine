"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilverchaseFoxBase = require("../setISD/SilverchaseFox.js");

class SilverchaseFox extends SilverchaseFoxBase {
  constructor(game) {
    super(game, "Silverchase Fox", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SilverchaseFox;
