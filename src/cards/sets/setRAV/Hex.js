"use strict";
const Constants = require ("../../../Constants");
const HexBase = require("../setCMD/Hex");

class Hex extends HexBase {
  constructor(game) {
    super(game, "Hex", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Hex;
