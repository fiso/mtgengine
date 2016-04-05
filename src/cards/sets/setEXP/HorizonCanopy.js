"use strict";
const Constants = require ("../../../Constants");
const HorizonCanopyBase = require("../setFUT/HorizonCanopy");

class HorizonCanopy extends HorizonCanopyBase {
  constructor(game) {
    super(game, "Horizon Canopy", "Zendikar Expedition", "EXP");
  }
}

module.exports = HorizonCanopy;
