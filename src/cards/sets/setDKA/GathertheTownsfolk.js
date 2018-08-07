"use strict";
const Constants = require ("../../../Constants");
const GathertheTownsfolkBase = require("../setDDQ/GathertheTownsfolk");

class GathertheTownsfolk extends GathertheTownsfolkBase {
  constructor (game) {
    super(game, "Gather the Townsfolk", "Dark Ascension", "DKA");
  }
}

module.exports = GathertheTownsfolk;
