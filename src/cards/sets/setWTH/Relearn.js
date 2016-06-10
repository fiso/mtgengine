"use strict";
const Constants = require ("../../../Constants");
const RelearnBase = require("../set6ED/Relearn");

class Relearn extends RelearnBase {
  constructor (game) {
    super(game, "Relearn", "Weatherlight", "WTH");
  }
}

module.exports = Relearn;
