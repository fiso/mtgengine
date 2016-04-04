"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoidmageProdigyBase = require("../setpMPR/VoidmageProdigy.js");

class VoidmageProdigy extends VoidmageProdigyBase {
  constructor(game) {
    super(game, "Voidmage Prodigy", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = VoidmageProdigy;
