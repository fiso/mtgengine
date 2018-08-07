"use strict";
const Constants = require ("../../../Constants");
const TribalFlamesBase = require("../setMM2/TribalFlames");

class TribalFlames extends TribalFlamesBase {
  constructor (game) {
    super(game, "Tribal Flames", "Invasion", "INV");
  }
}

module.exports = TribalFlames;
