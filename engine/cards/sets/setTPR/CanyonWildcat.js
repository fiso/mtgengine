"use strict";
const Constants = require ("../../../Constants");
const CanyonWildcatBase = require("../setDDH/CanyonWildcat");

class CanyonWildcat extends CanyonWildcatBase {
  constructor(game) {
    super(game, "Canyon Wildcat", "Tempest Remastered", "TPR");
  }
}

module.exports = CanyonWildcat;
