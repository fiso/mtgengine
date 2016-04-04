"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SatyrWayfinderBase = require("../setBNG/SatyrWayfinder.js");

class SatyrWayfinder extends SatyrWayfinderBase {
  constructor(game) {
    super(game, "Satyr Wayfinder", "Commander 2015", "C15");
  }
}

module.exports = SatyrWayfinder;
