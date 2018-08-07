"use strict";
const Constants = require ("../../../Constants");
const IllTemperedCyclopsBase = require("../setCN2/IllTemperedCyclops");

class IllTemperedCyclops extends IllTemperedCyclopsBase {
  constructor (game) {
    super(game, "Ill-Tempered Cyclops", "Theros", "THS");
  }
}

module.exports = IllTemperedCyclops;
