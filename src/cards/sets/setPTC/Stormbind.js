"use strict";
const Constants = require ("../../../Constants");
const StormbindBase = require("../setTSB/Stormbind");

class Stormbind extends StormbindBase {
  constructor (game) {
    super(game, "Stormbind", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Stormbind;
