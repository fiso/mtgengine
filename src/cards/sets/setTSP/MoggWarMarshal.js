"use strict";
const Constants = require ("../../../Constants");
const MoggWarMarshalBase = require("../setEMA/MoggWarMarshal");

class MoggWarMarshal extends MoggWarMarshalBase {
  constructor (game) {
    super(game, "Mogg War Marshal", "Time Spiral", "TSP");
  }
}

module.exports = MoggWarMarshal;
