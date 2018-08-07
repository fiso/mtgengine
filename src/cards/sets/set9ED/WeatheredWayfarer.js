"use strict";
const Constants = require ("../../../Constants");
const WeatheredWayfarerBase = require("../setTD0/WeatheredWayfarer");

class WeatheredWayfarer extends WeatheredWayfarerBase {
  constructor (game) {
    super(game, "Weathered Wayfarer", "Ninth Edition", "9ED");
  }
}

module.exports = WeatheredWayfarer;
