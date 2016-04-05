"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmpyrialPlate extends UnimplementedCard {
  constructor(game) {
    super(game, "Empyrial Plate", "Mirrodin", "MRD");
  }
}

module.exports = EmpyrialPlate;
