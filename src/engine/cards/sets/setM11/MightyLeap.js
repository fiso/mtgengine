"use strict";
const Constants = require ("../../../Constants");
const MightyLeapBase = require("../setM19/MightyLeap");

class MightyLeap extends MightyLeapBase {
  constructor (game) {
    super(game, "Mighty Leap", "Magic 2011", "M11");
  }
}

module.exports = MightyLeap;
