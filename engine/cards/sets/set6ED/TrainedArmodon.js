"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrainedArmodon extends Card {
  constructor(game) {
    super(game, "Trained Armodon", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TrainedArmodon;
