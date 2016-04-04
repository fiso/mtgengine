"use strict";
const Constants = require ("../../../Constants");
const ArsenalThresherBase = require("../setARB/ArsenalThresher");

class ArsenalThresher extends ArsenalThresherBase {
  constructor(game) {
    super(game, "Arsenal Thresher", "Planechase", "HOP");
  }
}

module.exports = ArsenalThresher;
