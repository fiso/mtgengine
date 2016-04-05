"use strict";
const Constants = require ("../../../Constants");
const OrdealofPurphorosBase = require("../setDDL/OrdealofPurphoros");

class OrdealofPurphoros extends OrdealofPurphorosBase {
  constructor(game) {
    super(game, "Ordeal of Purphoros", "Theros", "THS");
  }
}

module.exports = OrdealofPurphoros;
