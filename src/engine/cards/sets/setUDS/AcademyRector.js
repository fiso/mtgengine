"use strict";
const Constants = require ("../../../Constants");
const AcademyRectorBase = require("../setWC00/AcademyRector");

class AcademyRector extends AcademyRectorBase {
  constructor (game) {
    super(game, "Academy Rector", "Urza's Destiny", "UDS");
  }
}

module.exports = AcademyRector;
