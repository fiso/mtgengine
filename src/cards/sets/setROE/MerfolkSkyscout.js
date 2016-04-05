"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkSkyscout extends UnimplementedCard {
  constructor(game) {
    super(game, "Merfolk Skyscout", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MerfolkSkyscout;
