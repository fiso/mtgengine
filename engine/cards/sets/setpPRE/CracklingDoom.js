"use strict";
const Constants = require ("../../../Constants");
const CracklingDoomBase = require("../setKTK/CracklingDoom");

class CracklingDoom extends CracklingDoomBase {
  constructor(game) {
    super(game, "Crackling Doom", "Prerelease Events", "pPRE");
  }
}

module.exports = CracklingDoom;
