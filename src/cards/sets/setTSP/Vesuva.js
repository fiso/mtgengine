"use strict";
const Constants = require ("../../../Constants");
const VesuvaBase = require("../setV12/Vesuva");

class Vesuva extends VesuvaBase {
  constructor(game) {
    super(game, "Vesuva", "Time Spiral", "TSP");
  }
}

module.exports = Vesuva;
