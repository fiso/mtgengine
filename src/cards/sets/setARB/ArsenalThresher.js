"use strict";
const Constants = require ("../../../Constants");
const ArsenalThresherBase = require("../setHOP/ArsenalThresher");

class ArsenalThresher extends ArsenalThresherBase {
  constructor (game) {
    super(game, "Arsenal Thresher", "Alara Reborn", "ARB");
  }
}

module.exports = ArsenalThresher;
