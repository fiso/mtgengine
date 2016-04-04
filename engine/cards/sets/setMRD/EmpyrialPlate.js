"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmpyrialPlate extends Card {
  constructor(game) {
    super(game, "Empyrial Plate", "Mirrodin", "MRD");
  }
}

module.exports = EmpyrialPlate;
