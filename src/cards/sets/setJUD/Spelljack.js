"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spelljack extends UnimplementedCard {
  constructor(game) {
    super(game, "Spelljack", "Judgment", "JUD");
  }
}

module.exports = Spelljack;
