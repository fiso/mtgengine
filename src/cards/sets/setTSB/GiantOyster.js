"use strict";
const Constants = require ("../../../Constants");
const GiantOysterBase = require("../setHML/GiantOyster");

class GiantOyster extends GiantOysterBase {
  constructor (game) {
    super(game, "Giant Oyster", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = GiantOyster;
