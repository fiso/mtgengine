"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Devastate extends UnimplementedCard {
  constructor (game) {
    super(game, "Devastate", "Prophecy", "PCY");
  }
}

module.exports = Devastate;
