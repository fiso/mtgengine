"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasFactory extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Factory", "Commander 2013", "C13");
  }
}

module.exports = UrzasFactory;
