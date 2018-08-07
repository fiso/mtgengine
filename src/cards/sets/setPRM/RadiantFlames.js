"use strict";
const Constants = require ("../../../Constants");
const RadiantFlamesBase = require("../setBFZ/RadiantFlames");

class RadiantFlames extends RadiantFlamesBase {
  constructor (game) {
    super(game, "Radiant Flames", "Magic Online Promos", "PRM");
  }
}

module.exports = RadiantFlames;
