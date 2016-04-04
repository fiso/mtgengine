"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArsenalThresherBase = require("../setARB/ArsenalThresher.js");

class ArsenalThresher extends ArsenalThresherBase {
  constructor(game) {
    super(game, "Arsenal Thresher", "Planechase", "HOP");
  }
}

module.exports = ArsenalThresher;
