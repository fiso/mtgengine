"use strict";
const Constants = require ("../../../Constants");
const DiabolicMachineBase = require("../set5ED/DiabolicMachine");

class DiabolicMachine extends DiabolicMachineBase {
  constructor (game) {
    super(game, "Diabolic Machine", "The Dark", "DRK");
  }
}

module.exports = DiabolicMachine;
