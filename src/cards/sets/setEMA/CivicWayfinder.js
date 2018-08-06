"use strict";
const Constants = require ("../../../Constants");
const CivicWayfinderBase = require("../setDPA/CivicWayfinder");

class CivicWayfinder extends CivicWayfinderBase {
  constructor (game) {
    super(game, "Civic Wayfinder", "Eternal Masters", "EMA");
  }
}

module.exports = CivicWayfinder;
