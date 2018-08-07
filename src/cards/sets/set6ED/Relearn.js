"use strict";
const Constants = require ("../../../Constants");
const RelearnBase = require("../setS99/Relearn");

class Relearn extends RelearnBase {
  constructor (game) {
    super(game, "Relearn", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Relearn;
