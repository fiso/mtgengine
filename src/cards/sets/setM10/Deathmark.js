"use strict";
const Constants = require ("../../../Constants");
const DeathmarkBase = require("../setCSP/Deathmark");

class Deathmark extends DeathmarkBase {
  constructor (game) {
    super(game, "Deathmark", "Magic 2010", "M10");
  }
}

module.exports = Deathmark;
