"use strict";
const Constants = require ("../../../Constants");
const GiantOysterBase = require("../setTSB/GiantOyster");

class GiantOyster extends GiantOysterBase {
  constructor (game) {
    super(game, "Giant Oyster", "Homelands", "HML");
  }
}

module.exports = GiantOyster;
