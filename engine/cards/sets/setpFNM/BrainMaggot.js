"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrainMaggot extends Card {
  constructor(game) {
    super(game, "Brain Maggot", "Friday Night Magic", "pFNM");
  }
}

module.exports = BrainMaggot;
