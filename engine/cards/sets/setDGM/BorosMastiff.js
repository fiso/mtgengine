"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorosMastiff extends Card {
  constructor(game) {
    super(game, "Boros Mastiff", "Dragon's Maze", "DGM");
  }
}

module.exports = BorosMastiff;
