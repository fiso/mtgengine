"use strict";
const Constants = require ("../../../Constants");
const GhituSlingerBase = require("../setEMA/GhituSlinger");

class GhituSlinger extends GhituSlingerBase {
  constructor (game) {
    super(game, "Ghitu Slinger", "Urza's Legacy", "ULG");
  }
}

module.exports = GhituSlinger;
