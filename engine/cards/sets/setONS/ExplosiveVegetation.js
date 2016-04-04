"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExplosiveVegetationBase = require("../setDTK/ExplosiveVegetation.js");

class ExplosiveVegetation extends ExplosiveVegetationBase {
  constructor(game) {
    super(game, "Explosive Vegetation", "Onslaught", "ONS");
  }
}

module.exports = ExplosiveVegetation;
