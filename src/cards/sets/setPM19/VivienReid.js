"use strict";
const Constants = require ("../../../Constants");
const VivienReidBase = require("../setM19/VivienReid");

class VivienReid extends VivienReidBase {
  constructor (game) {
    super(game, "Vivien Reid", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = VivienReid;
