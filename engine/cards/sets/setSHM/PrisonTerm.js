"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrisonTermBase = require("../setCMD/PrisonTerm.js");

class PrisonTerm extends PrisonTermBase {
  constructor(game) {
    super(game, "Prison Term", "Shadowmoor", "SHM");
  }
}

module.exports = PrisonTerm;
