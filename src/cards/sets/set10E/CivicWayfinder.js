"use strict";
const Constants = require ("../../../Constants");
const CivicWayfinderBase = require("../setDPA/CivicWayfinder");

class CivicWayfinder extends CivicWayfinderBase {
  constructor (game) {
    super(game, "Civic Wayfinder", "Tenth Edition", "10E");
  }
}

module.exports = CivicWayfinder;
