"use strict";
const Constants = require ("../../../Constants");
const BoneSawBase = require("../setOGW/BoneSaw");

class BoneSaw extends BoneSawBase {
  constructor (game) {
    super(game, "Bone Saw", "Conflux", "CON");
  }
}

module.exports = BoneSaw;
