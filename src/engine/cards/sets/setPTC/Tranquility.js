"use strict";
const Constants = require ("../../../Constants");
const TranquilityBase = require("../setTPR/Tranquility");

class Tranquility extends TranquilityBase {
  constructor (game) {
    super(game, "Tranquility", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Tranquility;
