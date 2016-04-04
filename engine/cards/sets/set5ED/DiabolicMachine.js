"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiabolicMachine extends Card {
  constructor(game) {
    super(game, "Diabolic Machine", "Fifth Edition", "5ED");
  }
}

module.exports = DiabolicMachine;
