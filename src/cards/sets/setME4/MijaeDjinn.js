"use strict";
const Constants = require ("../../../Constants");
const MijaeDjinnBase = require("../setARN/MijaeDjinn");

class MijaeDjinn extends MijaeDjinnBase {
  constructor (game) {
    super(game, "Mijae Djinn", "Masters Edition IV", "ME4");
  }
}

module.exports = MijaeDjinn;
