"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conviction extends UnimplementedCard {
  constructor(game) {
    super(game, "Conviction", "Stronghold", "STH");
  }
}

module.exports = Conviction;
