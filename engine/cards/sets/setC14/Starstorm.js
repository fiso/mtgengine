"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StarstormBase = require("../setC13/Starstorm.js");

class Starstorm extends StarstormBase {
  constructor(game) {
    super(game, "Starstorm", "Commander 2014", "C14");
  }
}

module.exports = Starstorm;
