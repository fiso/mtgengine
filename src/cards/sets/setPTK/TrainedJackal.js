"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrainedJackal extends UnimplementedCard {
  constructor (game) {
    super(game, "Trained Jackal", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = TrainedJackal;
