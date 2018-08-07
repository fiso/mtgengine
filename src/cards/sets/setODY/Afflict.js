"use strict";
const Constants = require ("../../../Constants");
const AfflictBase = require("../set10E/Afflict");

class Afflict extends AfflictBase {
  constructor (game) {
    super(game, "Afflict", "Odyssey", "ODY");
  }
}

module.exports = Afflict;
