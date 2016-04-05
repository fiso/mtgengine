"use strict";
const Constants = require ("../../../Constants");
const InfectiousHorrorBase = require("../setARC/InfectiousHorror");

class InfectiousHorror extends InfectiousHorrorBase {
  constructor(game) {
    super(game, "Infectious Horror", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = InfectiousHorror;
