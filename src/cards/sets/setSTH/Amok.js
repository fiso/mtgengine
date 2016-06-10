"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Amok extends UnimplementedCard {
  constructor (game) {
    super(game, "Amok", "Stronghold", "STH");
  }
}

module.exports = Amok;
