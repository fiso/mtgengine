"use strict";
const Constants = require ("../../../Constants");
const PriestofUrabraskBase = require("../setpMGD/PriestofUrabrask");

class PriestofUrabrask extends PriestofUrabraskBase {
  constructor(game) {
    super(game, "Priest of Urabrask", "New Phyrexia", "NPH");
  }
}

module.exports = PriestofUrabrask;
