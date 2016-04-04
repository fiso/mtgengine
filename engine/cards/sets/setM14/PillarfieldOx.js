"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PillarfieldOxBase = require("../setM13/PillarfieldOx.js");

class PillarfieldOx extends PillarfieldOxBase {
  constructor(game) {
    super(game, "Pillarfield Ox", "Magic 2014 Core Set", "M14");
  }
}

module.exports = PillarfieldOx;
