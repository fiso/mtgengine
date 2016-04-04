"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrdealofPurphorosBase = require("../setDDL/OrdealofPurphoros.js");

class OrdealofPurphoros extends OrdealofPurphorosBase {
  constructor(game) {
    super(game, "Ordeal of Purphoros", "Theros", "THS");
  }
}

module.exports = OrdealofPurphoros;
