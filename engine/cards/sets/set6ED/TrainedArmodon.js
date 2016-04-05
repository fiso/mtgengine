"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrainedArmodon extends UnimplementedCard {
  constructor(game) {
    super(game, "Trained Armodon", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TrainedArmodon;
