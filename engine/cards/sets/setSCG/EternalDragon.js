"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EternalDragonBase = require("../setC13/EternalDragon.js");

class EternalDragon extends EternalDragonBase {
  constructor(game) {
    super(game, "Eternal Dragon", "Scourge", "SCG");
  }
}

module.exports = EternalDragon;
