"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Burgeoning extends UnimplementedCard {
  constructor(game) {
    super(game, "Burgeoning", "Stronghold", "STH");
  }
}

module.exports = Burgeoning;
