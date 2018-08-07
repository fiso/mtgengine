"use strict";
const Constants = require ("../../../Constants");
const RadiantFlamesBase = require("../setBFZ/RadiantFlames");

class RadiantFlames extends RadiantFlamesBase {
  constructor (game) {
    super(game, "Radiant Flames", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = RadiantFlames;
