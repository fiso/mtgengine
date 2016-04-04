"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VesuvaBase = require("../setV12/Vesuva.js");

class Vesuva extends VesuvaBase {
  constructor(game) {
    super(game, "Vesuva", "Time Spiral", "TSP");
  }
}

module.exports = Vesuva;
