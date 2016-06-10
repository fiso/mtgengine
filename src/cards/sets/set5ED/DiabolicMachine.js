"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiabolicMachine extends UnimplementedCard {
  constructor (game) {
    super(game, "Diabolic Machine", "Fifth Edition", "5ED");
  }
}

module.exports = DiabolicMachine;
