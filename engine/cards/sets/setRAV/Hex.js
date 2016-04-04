"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HexBase = require("../setCMD/Hex.js");

class Hex extends HexBase {
  constructor(game) {
    super(game, "Hex", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Hex;
