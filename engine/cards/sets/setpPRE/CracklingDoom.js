"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CracklingDoomBase = require("../setKTK/CracklingDoom.js");

class CracklingDoom extends CracklingDoomBase {
  constructor(game) {
    super(game, "Crackling Doom", "Prerelease Events", "pPRE");
  }
}

module.exports = CracklingDoom;
