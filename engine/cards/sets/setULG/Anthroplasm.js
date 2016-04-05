"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anthroplasm extends UnimplementedCard {
  constructor(game) {
    super(game, "Anthroplasm", "Urza's Legacy", "ULG");
  }
}

module.exports = Anthroplasm;
