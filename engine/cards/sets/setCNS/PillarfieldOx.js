"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PillarfieldOxBase = require("../setM13/PillarfieldOx.js");

class PillarfieldOx extends PillarfieldOxBase {
  constructor(game) {
    super(game, "Pillarfield Ox", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PillarfieldOx;
