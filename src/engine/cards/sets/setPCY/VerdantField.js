"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VerdantField extends UnimplementedCard {
  constructor (game) {
    super(game, "Verdant Field", "Prophecy", "PCY");
  }
}

module.exports = VerdantField;
