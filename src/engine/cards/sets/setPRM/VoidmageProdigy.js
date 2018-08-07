"use strict";
const Constants = require ("../../../Constants");
const VoidmageProdigyBase = require("../setTSB/VoidmageProdigy");

class VoidmageProdigy extends VoidmageProdigyBase {
  constructor (game) {
    super(game, "Voidmage Prodigy", "Magic Online Promos", "PRM");
  }
}

module.exports = VoidmageProdigy;
