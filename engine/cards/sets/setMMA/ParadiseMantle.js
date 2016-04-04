"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ParadiseMantleBase = require("../set5DN/ParadiseMantle.js");

class ParadiseMantle extends ParadiseMantleBase {
  constructor(game) {
    super(game, "Paradise Mantle", "Modern Masters", "MMA");
  }
}

module.exports = ParadiseMantle;
