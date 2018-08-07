"use strict";
const Constants = require ("../../../Constants");
const HordelingOutburstBase = require("../setA25/HordelingOutburst");

class HordelingOutburst extends HordelingOutburstBase {
  constructor (game) {
    super(game, "Hordeling Outburst", "Magic Online Promos", "PRM");
  }
}

module.exports = HordelingOutburst;
