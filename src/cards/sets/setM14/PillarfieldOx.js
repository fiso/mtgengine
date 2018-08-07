"use strict";
const Constants = require ("../../../Constants");
const PillarfieldOxBase = require("../setCNS/PillarfieldOx");

class PillarfieldOx extends PillarfieldOxBase {
  constructor (game) {
    super(game, "Pillarfield Ox", "Magic 2014", "M14");
  }
}

module.exports = PillarfieldOx;
