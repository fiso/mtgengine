"use strict";
const Constants = require ("../../../Constants");
const MightyLeapBase = require("../setM19/MightyLeap");

class MightyLeap extends MightyLeapBase {
  constructor (game) {
    super(game, "Mighty Leap", "Magic Origins", "ORI");
  }
}

module.exports = MightyLeap;
