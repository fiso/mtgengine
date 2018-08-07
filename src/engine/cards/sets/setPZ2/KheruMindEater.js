"use strict";
const Constants = require ("../../../Constants");
const KheruMindEaterBase = require("../setC17/KheruMindEater");

class KheruMindEater extends KheruMindEaterBase {
  constructor (game) {
    super(game, "Kheru Mind-Eater", "You Make the Cube", "PZ2");
  }
}

module.exports = KheruMindEater;
