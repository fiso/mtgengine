"use strict";
const Constants = require ("../../../Constants");
const InfectiousHorrorBase = require("../setM19/InfectiousHorror");

class InfectiousHorror extends InfectiousHorrorBase {
  constructor (game) {
    super(game, "Infectious Horror", "Conspiracy", "CNS");
  }
}

module.exports = InfectiousHorror;
