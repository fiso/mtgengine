"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cessation extends UnimplementedCard {
  constructor(game) {
    super(game, "Cessation", "Urza's Legacy", "ULG");
  }
}

module.exports = Cessation;
