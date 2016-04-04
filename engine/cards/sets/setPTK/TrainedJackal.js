"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrainedJackal extends Card {
  constructor(game) {
    super(game, "Trained Jackal", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = TrainedJackal;
