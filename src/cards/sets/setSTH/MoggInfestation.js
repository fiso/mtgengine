"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggInfestation extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Infestation", "Stronghold", "STH");
  }
}

module.exports = MoggInfestation;
