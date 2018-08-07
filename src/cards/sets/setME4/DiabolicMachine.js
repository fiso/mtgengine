"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiabolicMachine extends UnimplementedCard {
  constructor (game) {
    super(game, "Diabolic Machine", "Masters Edition IV", "ME4");
  }
}

module.exports = DiabolicMachine;
