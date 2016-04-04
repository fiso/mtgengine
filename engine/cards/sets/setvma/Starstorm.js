"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StarstormBase = require("../setC13/Starstorm.js");

class Starstorm extends StarstormBase {
  constructor(game) {
    super(game, "Starstorm", "Vintage Masters", "VMA");
  }
}

module.exports = Starstorm;
