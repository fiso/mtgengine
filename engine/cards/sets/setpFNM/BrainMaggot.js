"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrainMaggot extends UnimplementedCard {
  constructor(game) {
    super(game, "Brain Maggot", "Friday Night Magic", "pFNM");
  }
}

module.exports = BrainMaggot;
