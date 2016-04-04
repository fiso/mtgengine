"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampireHexmageBase = require("../setC14/VampireHexmage.js");

class VampireHexmage extends VampireHexmageBase {
  constructor(game) {
    super(game, "Vampire Hexmage", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = VampireHexmage;
