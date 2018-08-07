"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recall extends UnimplementedCard {
  constructor (game) {
    super(game, "Recall", "Masters Edition III", "ME3");
  }
}

module.exports = Recall;
