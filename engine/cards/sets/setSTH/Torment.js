"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Torment extends UnimplementedCard {
  constructor(game) {
    super(game, "Torment", "Stronghold", "STH");
  }
}

module.exports = Torment;
