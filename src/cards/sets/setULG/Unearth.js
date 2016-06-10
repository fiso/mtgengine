"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unearth extends UnimplementedCard {
  constructor (game) {
    super(game, "Unearth", "Urza's Legacy", "ULG");
  }
}

module.exports = Unearth;
