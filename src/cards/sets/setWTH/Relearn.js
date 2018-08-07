"use strict";
const Constants = require ("../../../Constants");
const RelearnBase = require("../setS99/Relearn");

class Relearn extends RelearnBase {
  constructor (game) {
    super(game, "Relearn", "Weatherlight", "WTH");
  }
}

module.exports = Relearn;
