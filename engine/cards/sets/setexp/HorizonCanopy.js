"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HorizonCanopyBase = require("../setFUT/HorizonCanopy.js");

class HorizonCanopy extends HorizonCanopyBase {
  constructor(game) {
    super(game, "Horizon Canopy", "Zendikar Expedition", "EXP");
  }
}

module.exports = HorizonCanopy;
