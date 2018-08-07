"use strict";
const Constants = require ("../../../Constants");
const MitoticSlimeBase = require("../setPCA/MitoticSlime");

class MitoticSlime extends MitoticSlimeBase {
  constructor (game) {
    super(game, "Mitotic Slime", "Planechase 2012", "PC2");
  }
}

module.exports = MitoticSlime;
