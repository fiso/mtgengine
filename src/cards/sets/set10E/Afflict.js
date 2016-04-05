"use strict";
const Constants = require ("../../../Constants");
const AfflictBase = require("../setODY/Afflict");

class Afflict extends AfflictBase {
  constructor(game) {
    super(game, "Afflict", "Tenth Edition", "10E");
  }
}

module.exports = Afflict;
