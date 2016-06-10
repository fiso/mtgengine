"use strict";
const Constants = require ("../../../Constants");
const MeditateBase = require("../setTMP/Meditate");

class Meditate extends MeditateBase {
  constructor (game) {
    super(game, "Meditate", "Tempest Remastered", "TPR");
  }
}

module.exports = Meditate;
