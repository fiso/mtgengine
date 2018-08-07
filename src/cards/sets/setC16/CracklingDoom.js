"use strict";
const Constants = require ("../../../Constants");
const CracklingDoomBase = require("../setC17/CracklingDoom");

class CracklingDoom extends CracklingDoomBase {
  constructor (game) {
    super(game, "Crackling Doom", "Commander 2016", "C16");
  }
}

module.exports = CracklingDoom;
