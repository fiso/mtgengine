"use strict";
const Constants = require ("../../../Constants");
const VoidmageProdigyBase = require("../setTSB/VoidmageProdigy");

class VoidmageProdigy extends VoidmageProdigyBase {
  constructor (game) {
    super(game, "Voidmage Prodigy", "Magic Player Rewards 2003", "P03");
  }
}

module.exports = VoidmageProdigy;
