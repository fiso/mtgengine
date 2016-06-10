"use strict";
const Constants = require ("../../../Constants");
const GathertheTownsfolkBase = require("../setDKA/GathertheTownsfolk");

class GathertheTownsfolk extends GathertheTownsfolkBase {
  constructor (game) {
    super(game, "Gather the Townsfolk", "WPN and Gateway", "pWPN");
  }
}

module.exports = GathertheTownsfolk;
