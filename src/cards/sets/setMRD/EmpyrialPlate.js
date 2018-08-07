"use strict";
const Constants = require ("../../../Constants");
const EmpyrialPlateBase = require("../setC16/EmpyrialPlate");

class EmpyrialPlate extends EmpyrialPlateBase {
  constructor (game) {
    super(game, "Empyrial Plate", "Mirrodin", "MRD");
  }
}

module.exports = EmpyrialPlate;
