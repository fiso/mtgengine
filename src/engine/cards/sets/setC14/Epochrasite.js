"use strict";
const Constants = require ("../../../Constants");
const EpochrasiteBase = require("../setCM2/Epochrasite");

class Epochrasite extends EpochrasiteBase {
  constructor (game) {
    super(game, "Epochrasite", "Commander 2014", "C14");
  }
}

module.exports = Epochrasite;
