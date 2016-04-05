"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarElephant extends UnimplementedCard {
  constructor(game) {
    super(game, "War Elephant", "Arabian Nights", "ARN");
  }
}

module.exports = WarElephant;
