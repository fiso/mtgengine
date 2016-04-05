"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrainPry extends UnimplementedCard {
  constructor(game) {
    super(game, "Brain Pry", "Dissension", "DIS");
  }
}

module.exports = BrainPry;
