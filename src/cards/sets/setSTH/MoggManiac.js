"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggManiac extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Maniac", "Stronghold", "STH");
  }
}

module.exports = MoggManiac;
