"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamiteBlessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Samite Blessing", "Stronghold", "STH");
  }
}

module.exports = SamiteBlessing;
