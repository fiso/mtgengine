"use strict";
const Constants = require ("../../../Constants");
const MeditateBase = require("../setTPR/Meditate");

class Meditate extends MeditateBase {
  constructor (game) {
    super(game, "Meditate", "Tempest", "TMP");
  }
}

module.exports = Meditate;
