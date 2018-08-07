"use strict";
const Constants = require ("../../../Constants");
const ScourgeofFleetsBase = require("../setDDO/ScourgeofFleets");

class ScourgeofFleets extends ScourgeofFleetsBase {
  constructor (game) {
    super(game, "Scourge of Fleets", "Magic Online Promos", "PRM");
  }
}

module.exports = ScourgeofFleets;
