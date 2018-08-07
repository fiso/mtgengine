"use strict";
const Constants = require ("../../../Constants");
const HostileDesertBase = require("../setHOU/HostileDesert");

class HostileDesert extends HostileDesertBase {
  constructor (game) {
    super(game, "Hostile Desert", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = HostileDesert;
