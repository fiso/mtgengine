"use strict";
const Constants = require ("../../../Constants");
const HomunculusBase = require("../setTISD/Homunculus");

class Homunculus extends HomunculusBase {
  constructor (game) {
    super(game, "Homunculus", "Shards of Alara Tokens", "TALA");
  }
}

module.exports = Homunculus;
