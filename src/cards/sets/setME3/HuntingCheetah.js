"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingCheetah extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunting Cheetah", "Masters Edition III", "ME3");
  }
}

module.exports = HuntingCheetah;
