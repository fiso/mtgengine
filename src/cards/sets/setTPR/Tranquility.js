"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tranquility extends UnimplementedCard {
  constructor (game) {
    super(game, "Tranquility", "Tempest Remastered", "TPR");
  }
}

module.exports = Tranquility;
