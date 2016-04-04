"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CanyonWildcatBase = require("../setDDH/CanyonWildcat.js");

class CanyonWildcat extends CanyonWildcatBase {
  constructor(game) {
    super(game, "Canyon Wildcat", "Tempest", "TMP");
  }
}

module.exports = CanyonWildcat;
