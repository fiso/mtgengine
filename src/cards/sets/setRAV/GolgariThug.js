"use strict";
const Constants = require ("../../../Constants");
const GolgariThugBase = require("../setDDJ/GolgariThug");

class GolgariThug extends GolgariThugBase {
  constructor (game) {
    super(game, "Golgari Thug", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GolgariThug;
