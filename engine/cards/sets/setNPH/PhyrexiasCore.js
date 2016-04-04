"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexiasCoreBase = require("../setC14/PhyrexiasCore.js");

class PhyrexiasCore extends PhyrexiasCoreBase {
  constructor(game) {
    super(game, "Phyrexia's Core", "New Phyrexia", "NPH");
  }
}

module.exports = PhyrexiasCore;
