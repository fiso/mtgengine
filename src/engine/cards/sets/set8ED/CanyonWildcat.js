"use strict";
const Constants = require ("../../../Constants");
const CanyonWildcatBase = require("../setTPR/CanyonWildcat");

class CanyonWildcat extends CanyonWildcatBase {
  constructor (game) {
    super(game, "Canyon Wildcat", "Eighth Edition", "8ED");
  }
}

module.exports = CanyonWildcat;
