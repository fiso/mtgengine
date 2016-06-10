"use strict";
const Constants = require ("../../../Constants");
const EpochrasiteBase = require("../setC14/Epochrasite");

class Epochrasite extends EpochrasiteBase {
  constructor (game) {
    super(game, "Epochrasite", "Future Sight", "FUT");
  }
}

module.exports = Epochrasite;
