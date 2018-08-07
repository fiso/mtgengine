"use strict";
const Constants = require ("../../../Constants");
const HeartofKiranBase = require("../setAER/HeartofKiran");

class HeartofKiran extends HeartofKiranBase {
  constructor (game) {
    super(game, "Heart of Kiran", "Aether Revolt Promos", "PAER");
  }
}

module.exports = HeartofKiran;
