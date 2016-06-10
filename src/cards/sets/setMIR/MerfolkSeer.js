"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Seer", "Mirage", "MIR");
  }
}

module.exports = MerfolkSeer;
