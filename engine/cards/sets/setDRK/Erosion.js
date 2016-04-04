"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ErosionBase = require("../set4ED/Erosion.js");

class Erosion extends ErosionBase {
  constructor(game) {
    super(game, "Erosion", "The Dark", "DRK");
  }
}

module.exports = Erosion;
