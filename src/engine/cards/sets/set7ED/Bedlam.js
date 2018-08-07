"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bedlam extends UnimplementedCard {
  constructor (game) {
    super(game, "Bedlam", "Seventh Edition", "7ED");
  }
}

module.exports = Bedlam;
