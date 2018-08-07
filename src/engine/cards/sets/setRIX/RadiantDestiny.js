"use strict";
const Constants = require ("../../../Constants");
const RadiantDestinyBase = require("../setPRIX/RadiantDestiny");

class RadiantDestiny extends RadiantDestinyBase {
  constructor (game) {
    super(game, "Radiant Destiny", "Rivals of Ixalan", "RIX");
  }
}

module.exports = RadiantDestiny;
