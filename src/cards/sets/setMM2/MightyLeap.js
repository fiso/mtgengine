"use strict";
const Constants = require ("../../../Constants");
const MightyLeapBase = require("../setDDO/MightyLeap");

class MightyLeap extends MightyLeapBase {
  constructor(game) {
    super(game, "Mighty Leap", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MightyLeap;
