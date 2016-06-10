"use strict";
const Constants = require ("../../../Constants");
const MijaeDjinnBase = require("../setARN/MijaeDjinn");

class MijaeDjinn extends MijaeDjinnBase {
  constructor (game) {
    super(game, "Mijae Djinn", "Revised Edition", "3ED");
  }
}

module.exports = MijaeDjinn;
