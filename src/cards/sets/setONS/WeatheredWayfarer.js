"use strict";
const Constants = require ("../../../Constants");
const WeatheredWayfarerBase = require("../setTD0/WeatheredWayfarer");

class WeatheredWayfarer extends WeatheredWayfarerBase {
  constructor (game) {
    super(game, "Weathered Wayfarer", "Onslaught", "ONS");
  }
}

module.exports = WeatheredWayfarer;
