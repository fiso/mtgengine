"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkSkyscout extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Skyscout", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = MerfolkSkyscout;
