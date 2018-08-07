"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PouncingCheetah extends UnimplementedCard {
  constructor (game) {
    super(game, "Pouncing Cheetah", "Amonkhet", "AKH");
  }
}

module.exports = PouncingCheetah;
