"use strict";
const Constants = require ("../../../Constants");
const BoneSawBase = require("../setCON/BoneSaw");

class BoneSaw extends BoneSawBase {
  constructor(game) {
    super(game, "Bone Saw", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BoneSaw;
