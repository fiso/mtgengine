"use strict";
const Constants = require ("../../../Constants");
const PriestofUrabraskBase = require("../setNPH/PriestofUrabrask");

class PriestofUrabrask extends PriestofUrabraskBase {
  constructor (game) {
    super(game, "Priest of Urabrask", "New Phyrexia Promos", "PNPH");
  }
}

module.exports = PriestofUrabrask;
