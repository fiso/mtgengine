"use strict";
const Constants = require ("../../../Constants");
const CloakedSirenBase = require("../setCN2/CloakedSiren");

class CloakedSiren extends CloakedSirenBase {
  constructor (game) {
    super(game, "Cloaked Siren", "Journey into Nyx", "JOU");
  }
}

module.exports = CloakedSiren;
