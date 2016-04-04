"use strict";
const Constants = require ("../../../Constants");
const KnightofStromgaldBase = require("../setATH/KnightofStromgald");

class KnightofStromgald extends KnightofStromgaldBase {
  constructor(game) {
    super(game, "Knight of Stromgald", "Ice Age", "ICE");
  }
}

module.exports = KnightofStromgald;
