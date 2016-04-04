"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OxidizeBase = require("../setDST/Oxidize.js");

class Oxidize extends OxidizeBase {
  constructor(game) {
    super(game, "Oxidize", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Oxidize;
