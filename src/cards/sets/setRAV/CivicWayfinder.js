"use strict";
const Constants = require ("../../../Constants");
const CivicWayfinderBase = require("../setDPA/CivicWayfinder");

class CivicWayfinder extends CivicWayfinderBase {
  constructor (game) {
    super(game, "Civic Wayfinder", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CivicWayfinder;
