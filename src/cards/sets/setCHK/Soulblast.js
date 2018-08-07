"use strict";
const Constants = require ("../../../Constants");
const SoulblastBase = require("../set10E/Soulblast");

class Soulblast extends SoulblastBase {
  constructor (game) {
    super(game, "Soulblast", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Soulblast;
