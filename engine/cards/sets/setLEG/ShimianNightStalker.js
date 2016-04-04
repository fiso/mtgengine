"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShimianNightStalkerBase = require("../setCHR/ShimianNightStalker.js");

class ShimianNightStalker extends ShimianNightStalkerBase {
  constructor(game) {
    super(game, "Shimian Night Stalker", "Legends", "LEG");
  }
}

module.exports = ShimianNightStalker;
