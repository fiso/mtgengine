"use strict";
const Constants = require ("../../../Constants");
const MijaeDjinnBase = require("../setME4/MijaeDjinn");

class MijaeDjinn extends MijaeDjinnBase {
  constructor (game) {
    super(game, "Mijae Djinn", "Arabian Nights", "ARN");
  }
}

module.exports = MijaeDjinn;
