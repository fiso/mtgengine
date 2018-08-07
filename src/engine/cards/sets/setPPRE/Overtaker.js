"use strict";
const Constants = require ("../../../Constants");
const OvertakerBase = require("../setPRM/Overtaker");

class Overtaker extends OvertakerBase {
  constructor (game) {
    super(game, "Overtaker", "Prerelease Events", "PPRE");
  }
}

module.exports = Overtaker;
