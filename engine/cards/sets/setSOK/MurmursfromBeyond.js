"use strict";
const Constants = require ("../../../Constants");
const MurmursfromBeyondBase = require("../setCMD/MurmursfromBeyond");

class MurmursfromBeyond extends MurmursfromBeyondBase {
  constructor(game) {
    super(game, "Murmurs from Beyond", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MurmursfromBeyond;
