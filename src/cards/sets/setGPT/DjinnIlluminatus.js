"use strict";
const Constants = require ("../../../Constants");
const DjinnIlluminatusBase = require("../setDDJ/DjinnIlluminatus");

class DjinnIlluminatus extends DjinnIlluminatusBase {
  constructor (game) {
    super(game, "Djinn Illuminatus", "Guildpact", "GPT");
  }
}

module.exports = DjinnIlluminatus;
