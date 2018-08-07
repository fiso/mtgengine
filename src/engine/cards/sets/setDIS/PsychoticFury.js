"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychoticFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychotic Fury", "Dissension", "DIS");
  }
}

module.exports = PsychoticFury;
