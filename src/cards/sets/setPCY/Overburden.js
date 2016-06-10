"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overburden extends UnimplementedCard {
  constructor (game) {
    super(game, "Overburden", "Prophecy", "PCY");
  }
}

module.exports = Overburden;
