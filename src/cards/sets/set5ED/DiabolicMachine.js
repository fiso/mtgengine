"use strict";
const Constants = require ("../../../Constants");
const DiabolicMachineBase = require("../setME4/DiabolicMachine");

class DiabolicMachine extends DiabolicMachineBase {
  constructor (game) {
    super(game, "Diabolic Machine", "Fifth Edition", "5ED");
  }
}

module.exports = DiabolicMachine;
