"use strict";
const Constants = require ("../../../Constants");
const CracklingDoomBase = require("../setC17/CracklingDoom");

class CracklingDoom extends CracklingDoomBase {
  constructor (game) {
    super(game, "Crackling Doom", "Khans of Tarkir", "KTK");
  }
}

module.exports = CracklingDoom;
