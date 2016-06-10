"use strict";
const Constants = require ("../../../Constants");
const VoidmageProdigyBase = require("../setpMPR/VoidmageProdigy");

class VoidmageProdigy extends VoidmageProdigyBase {
  constructor (game) {
    super(game, "Voidmage Prodigy", "Onslaught", "ONS");
  }
}

module.exports = VoidmageProdigy;
