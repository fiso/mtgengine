"use strict";
const Constants = require ("../../../Constants");
const GathertheTownsfolkBase = require("../setDDQ/GathertheTownsfolk");

class GathertheTownsfolk extends GathertheTownsfolkBase {
  constructor (game) {
    super(game, "Gather the Townsfolk", "Wizards Play Network 2012", "PWP12");
  }
}

module.exports = GathertheTownsfolk;
