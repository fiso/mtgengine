"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindwarper extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindwarper", "Stronghold", "STH");
  }
}

module.exports = Mindwarper;
