"use strict";
const Constants = require ("../../../Constants");
const GhituEncampmentBase = require("../setDDN/GhituEncampment");

class GhituEncampment extends GhituEncampmentBase {
  constructor (game) {
    super(game, "Ghitu Encampment", "Urza's Legacy", "ULG");
  }
}

module.exports = GhituEncampment;
