"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfectiousHorrorBase = require("../setARC/InfectiousHorror.js");

class InfectiousHorror extends InfectiousHorrorBase {
  constructor(game) {
    super(game, "Infectious Horror", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = InfectiousHorror;
