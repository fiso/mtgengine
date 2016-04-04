"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WeatheredWayfarerBase = require("../set9ED/WeatheredWayfarer.js");

class WeatheredWayfarer extends WeatheredWayfarerBase {
  constructor(game) {
    super(game, "Weathered Wayfarer", "Onslaught", "ONS");
  }
}

module.exports = WeatheredWayfarer;
