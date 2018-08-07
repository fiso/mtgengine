"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoneRevenant extends UnimplementedCard {
  constructor (game) {
    super(game, "Lone Revenant", "Commander 2015", "C15");
  }
}

module.exports = LoneRevenant;
