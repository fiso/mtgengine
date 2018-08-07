"use strict";
const Constants = require ("../../../Constants");
const ShacklesBase = require("../setTPR/Shackles");

class Shackles extends ShacklesBase {
  constructor (game) {
    super(game, "Shackles", "Exodus", "EXO");
  }
}

module.exports = Shackles;
