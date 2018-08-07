"use strict";
const Constants = require ("../../../Constants");
const HordelingOutburstBase = require("../setA25/HordelingOutburst");

class HordelingOutburst extends HordelingOutburstBase {
  constructor (game) {
    super(game, "Hordeling Outburst", "Friday Night Magic 2015", "F15");
  }
}

module.exports = HordelingOutburst;
