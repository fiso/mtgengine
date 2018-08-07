"use strict";
const Constants = require ("../../../Constants");
const DeathmarkBase = require("../setMM2/Deathmark");

class Deathmark extends DeathmarkBase {
  constructor (game) {
    super(game, "Deathmark", "Magic 2010", "M10");
  }
}

module.exports = Deathmark;
