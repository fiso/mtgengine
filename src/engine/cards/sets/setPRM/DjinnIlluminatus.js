"use strict";
const Constants = require ("../../../Constants");
const DjinnIlluminatusBase = require("../setDDJ/DjinnIlluminatus");

class DjinnIlluminatus extends DjinnIlluminatusBase {
  constructor (game) {
    super(game, "Djinn Illuminatus", "Magic Online Promos", "PRM");
  }
}

module.exports = DjinnIlluminatus;
