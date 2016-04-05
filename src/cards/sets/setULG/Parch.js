"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Parch extends UnimplementedCard {
  constructor(game) {
    super(game, "Parch", "Urza's Legacy", "ULG");
  }
}

module.exports = Parch;
