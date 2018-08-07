"use strict";
const Constants = require ("../../../Constants");
const GathertheTownsfolkBase = require("../setDDQ/GathertheTownsfolk");

class GathertheTownsfolk extends GathertheTownsfolkBase {
  constructor (game) {
    super(game, "Gather the Townsfolk", "Magic Online Promos", "PRM");
  }
}

module.exports = GathertheTownsfolk;
