"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralAbomination extends UnimplementedCard {
  constructor (game) {
    super(game, "Feral Abomination", "Dominaria", "DOM");
  }
}

module.exports = FeralAbomination;
