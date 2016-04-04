"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TectonicEdgeBase = require("../setC14/TectonicEdge.js");

class TectonicEdge extends TectonicEdgeBase {
  constructor(game) {
    super(game, "Tectonic Edge", "Zendikar Expedition", "EXP");
  }
}

module.exports = TectonicEdge;
