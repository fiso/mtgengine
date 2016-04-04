"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrainedCheetah extends Card {
  constructor(game) {
    super(game, "Trained Cheetah", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = TrainedCheetah;
