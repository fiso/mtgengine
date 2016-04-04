"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiabolicMachineBase = require("../set5ED/DiabolicMachine.js");

class DiabolicMachine extends DiabolicMachineBase {
  constructor(game) {
    super(game, "Diabolic Machine", "Fourth Edition", "4ED");
  }
}

module.exports = DiabolicMachine;
