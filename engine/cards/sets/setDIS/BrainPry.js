"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrainPry extends Card {
  constructor(game) {
    super(game, "Brain Pry", "Dissension", "DIS");
  }
}

module.exports = BrainPry;
