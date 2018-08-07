"use strict";
const Constants = require ("../../../Constants");
const DeathmarkBase = require("../setMM2/Deathmark");

class Deathmark extends DeathmarkBase {
  constructor (game) {
    super(game, "Deathmark", "Tenth Edition", "10E");
  }
}

module.exports = Deathmark;
