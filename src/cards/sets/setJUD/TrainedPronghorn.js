"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrainedPronghorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Trained Pronghorn", "Judgment", "JUD");
  }
}

module.exports = TrainedPronghorn;
