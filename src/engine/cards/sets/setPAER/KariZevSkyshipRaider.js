"use strict";
const Constants = require ("../../../Constants");
const KariZevSkyshipRaiderBase = require("../setAER/KariZevSkyshipRaider");

class KariZevSkyshipRaider extends KariZevSkyshipRaiderBase {
  constructor (game) {
    super(game, "Kari Zev, Skyship Raider", "Aether Revolt Promos", "PAER");
  }
}

module.exports = KariZevSkyshipRaider;
