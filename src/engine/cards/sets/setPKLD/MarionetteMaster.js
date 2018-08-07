"use strict";
const Constants = require ("../../../Constants");
const MarionetteMasterBase = require("../setKLD/MarionetteMaster");

class MarionetteMaster extends MarionetteMasterBase {
  constructor (game) {
    super(game, "Marionette Master", "Kaladesh Promos", "PKLD");
  }
}

module.exports = MarionetteMaster;
