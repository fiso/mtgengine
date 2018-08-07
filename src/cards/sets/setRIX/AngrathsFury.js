"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngrathsFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Angrath's Fury", "Rivals of Ixalan", "RIX");
  }
}

module.exports = AngrathsFury;
