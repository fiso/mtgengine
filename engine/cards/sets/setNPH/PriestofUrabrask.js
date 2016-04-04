"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PriestofUrabraskBase = require("../setpMGD/PriestofUrabrask.js");

class PriestofUrabrask extends PriestofUrabraskBase {
  constructor(game) {
    super(game, "Priest of Urabrask", "New Phyrexia", "NPH");
  }
}

module.exports = PriestofUrabrask;
