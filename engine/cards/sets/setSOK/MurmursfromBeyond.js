"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MurmursfromBeyondBase = require("../setCMD/MurmursfromBeyond.js");

class MurmursfromBeyond extends MurmursfromBeyondBase {
  constructor(game) {
    super(game, "Murmurs from Beyond", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MurmursfromBeyond;
