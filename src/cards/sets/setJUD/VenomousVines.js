"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenomousVines extends UnimplementedCard {
  constructor(game) {
    super(game, "Venomous Vines", "Judgment", "JUD");
  }
}

module.exports = VenomousVines;
