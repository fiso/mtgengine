"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrainedCheetah extends UnimplementedCard {
  constructor(game) {
    super(game, "Trained Cheetah", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = TrainedCheetah;
