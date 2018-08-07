"use strict";
const Constants = require ("../../../Constants");
const DrogskolCavalryBase = require("../setSOI/DrogskolCavalry");

class DrogskolCavalry extends DrogskolCavalryBase {
  constructor (game) {
    super(game, "Drogskol Cavalry", "Magic Online Promos", "PRM");
  }
}

module.exports = DrogskolCavalry;
