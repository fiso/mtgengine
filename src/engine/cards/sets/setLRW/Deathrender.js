"use strict";
const Constants = require ("../../../Constants");
const DeathrenderBase = require("../setCNS/Deathrender");

class Deathrender extends DeathrenderBase {
  constructor (game) {
    super(game, "Deathrender", "Lorwyn", "LRW");
  }
}

module.exports = Deathrender;
