"use strict";
const Constants = require ("../../../Constants");
const GargoyleSentinelBase = require("../setM19/GargoyleSentinel");

class GargoyleSentinel extends GargoyleSentinelBase {
  constructor (game) {
    super(game, "Gargoyle Sentinel", "Magic 2015", "M15");
  }
}

module.exports = GargoyleSentinel;
