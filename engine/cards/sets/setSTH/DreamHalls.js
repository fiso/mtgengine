"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamHalls extends UnimplementedCard {
  constructor(game) {
    super(game, "Dream Halls", "Stronghold", "STH");
  }
}

module.exports = DreamHalls;
