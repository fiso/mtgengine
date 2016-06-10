"use strict";
const Constants = require ("../../../Constants");
const SoulblastBase = require("../setCHK/Soulblast");

class Soulblast extends SoulblastBase {
  constructor (game) {
    super(game, "Soulblast", "Tenth Edition", "10E");
  }
}

module.exports = Soulblast;
